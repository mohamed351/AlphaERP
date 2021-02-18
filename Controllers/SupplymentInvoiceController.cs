using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RealApplication.DTO.SuppliermentInvoiceDTO;
using RealApplication.Models;
using System.Linq;
using RealApplication.Extensions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using System;
using System.Collections.Generic;
using RealApplication.Models.Enum;
using Microsoft.Data.SqlClient;
using RealApplication.Models.StoredProcedures;
using AspNetCore.Reporting;
using Microsoft.AspNetCore.Hosting;
using System.Text;
using RealApplication.Repository.UnitOfWork;
using RealApplication.DTO;
using AutoMapper;
using Microsoft.AspNet.OData;

namespace RealApplication.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SupplymentInvoiceController:ControllerBase
    {
        private readonly ApplicationDbContext applicationDbContext;
        private readonly IWebHostEnvironment webHostEnvironment;
        private readonly IUnitOfWork unitOfWork;
        private readonly IMapper mapper;

        public SupplymentInvoiceController(ApplicationDbContext applicationDbContext, IWebHostEnvironment webHostEnvironment, IUnitOfWork unitOfWork, IMapper mapper)
        {
            this.applicationDbContext = applicationDbContext;
            this.webHostEnvironment = webHostEnvironment;
            this.unitOfWork = unitOfWork;
            this.mapper = mapper;
            System.Text.Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);
        }
        [HttpGet]
        public IActionResult Get([FromQuery] int pageSize, [FromQuery] int start, [FromQuery] string search = "")
        {
            search = search == null ? "" : search.Trim();
           var invoiceQuery  =  this.unitOfWork.SupplierInvoice.GetEntityDataTable(start, pageSize, a => a.InvoiceNumber.ToString().Contains(search), a => a.InvoiceNumber);
            var model = new DataTableDTO<SelectSuppliementInvoiceDTO>()
            {
                     Data = mapper.Map<IEnumerable<SelectSuppliementInvoiceDTO>>(invoiceQuery),
                    TotalCount= unitOfWork.SupplierInvoice.GetCount(a=>a.InvoiceNumber.ToString().Contains(search))
            };
          return Ok(model);
        }
        [HttpGet(template:"/api/[controller]/GetByBarCode/{barcode}")]
        public IActionResult GetProductsByMainBarCode(string barcode)
        {
            var query = applicationDbContext.ProductMeasurements
                  .Include(a => a.Product)
                  .Include(a => a.Measurement)
                  .Where(a => a.Product.BarCode.Contains(barcode) && a.Measurement.IsMain == true)
                  .Select(a => new { a.ProductID , a.Measurement.MainType, a.Product.ProductName, a.MeasurementID, a.Value, a.Measurement.Name, a.Product.BarCode });
                


            return Ok(query);
        }
        [EnableQuery()]
        [HttpGet(template:"DataO")]
        public IActionResult GetSupplierInvoice()
        {
            return Ok(unitOfWork.SupplierInvoice.GetIQueryableData());
        }

        [HttpGet(template: "/api/[controller]/GetByProductName/{productName}")]
        public IActionResult GetProductByName(string productName)
        {
            var query = applicationDbContext.ProductMeasurements
          .Include(a => a.Product)
          .Include(a => a.Measurement)
          .Where(a => a.Product.ProductName.Contains(productName) && a.Measurement.IsMain == true)
          .Select(a => new {a.ProductID , a.Product.ProductName, a.Measurement.MainType, a.Value, a.MeasurementID, a.Measurement.Name, a.Product.BarCode });


            return Ok(query);
        }

       
        [HttpPost]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult Post([FromBody]CreateSuppliermentInvoiceDTO invoiceDTO)
        {
          string UserId =   User.GetUserId();
            int NewInvoiceNumber = applicationDbContext.supplymentInvoices.Max(a => a.InvoiceNumber) + 1;
            var invoiceData = new SupplymentInvoice()
            {
                SupplierID = invoiceDTO.SupplierId,
                StoreID = invoiceDTO.StoreId,
                EmployeeID = UserId,
                InvoiceNumber = NewInvoiceNumber,
                IsCancelled = false,
                SupplymentDate = invoiceDTO.Invoicedate
                

            };
            foreach (var item in invoiceDTO.details)
            {
                invoiceData.InvoiceDetails.Add(new SupplymentDetail()
                {
                    ExpireDate = item.ExpireDate,
                    ProductID = item.ProductID,
                    Quantity = CalculateMeasurement(item.Quantity, item.MeasurementValue),
                    UnitPrice = item.Price,

                }); 
                applicationDbContext.ProductStores.Add(new ProductStore()
                {
                    ProductID = item.ProductID,
                    Quantity = CalculateMeasurement(Convert.ToInt32(item.Quantity), Convert.ToInt32(item.MeasurementValue)),
                    ExpireDate = item.ExpireDate,
                    Serial = item.ProductSerial,
                    ProductEnteredIn = DateTime.Now,
                    StoreID = invoiceData.StoreID,
                    UnitPrice = item.Price,
                    InvocieNumber = NewInvoiceNumber

                });
            }
           
            applicationDbContext.supplymentInvoices.Add(invoiceData);
            applicationDbContext.SaveChanges();

            return Ok(new {invoice= invoiceDTO , invoiceNumber = NewInvoiceNumber});
        }
        [HttpGet("/api/[controller]/GetReport/{InvoiceNumber}")]
        public IActionResult PurchasingReport(int InvoiceNumber)
        {
           
          var elements =   applicationDbContext.GetSupplierInvoices(InvoiceNumber);
            LocalReport report = new LocalReport($"{this.webHostEnvironment.WebRootPath}//reports//PurchasingInvoice.rdlc");
            report.AddDataSource("DataSet1", elements);
            var dictornay = new Dictionary<string, string>();
            dictornay.Add("InvoiceNumber", InvoiceNumber.ToString());
           var result = report.Execute(RenderType.Pdf,1,dictornay,"");
            return File(result.MainStream,"application/pdf");
        }
        private static decimal CalculateMeasurement(decimal quantity , decimal measurementValue)
        {
           
            return quantity * measurementValue;


        }

        
        
    }
}