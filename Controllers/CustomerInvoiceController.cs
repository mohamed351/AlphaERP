using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RealApplication.DTO;
using RealApplication.Models;
using RealApplication.Extensions;
using RealApplication.Repository.UnitOfWork;
using AutoMapper;
using RealApplication.DTO.CustomerInvoiceDTOS;
using RealApplication.Models.Enum;
using Microsoft.AspNet.OData;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.Data;
using AspNetCore.Reporting;
using Microsoft.AspNetCore.Hosting;
using System.Text;

namespace RealApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerInvoiceController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        private readonly IUnitOfWork unitOfWork;
        private readonly IMapper mapper;
        private readonly IConfiguration configuration;
        private readonly IWebHostEnvironment iwebHostConfiguration;

        public CustomerInvoiceController(ApplicationDbContext context,
            IUnitOfWork unitOfWork ,
            IMapper mapper,
            IConfiguration configuration,
            IWebHostEnvironment iwebHostConfiguration)
        {
            this.context = context;
            this.unitOfWork = unitOfWork;
            this.mapper = mapper;
            this.configuration = configuration;
            this.iwebHostConfiguration = iwebHostConfiguration;
            System.Text.Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);
        }

        [EnableQuery()]
        [HttpGet(template:"OData")]
        public IActionResult GetData()
        {
            return Ok(this.unitOfWork.CustomerInvoice.GetIQueryableData());
        }

        [HttpGet]
        public IActionResult Get([FromQuery] int pageSize, [FromQuery] int start, [FromQuery] string search = "")
        {
            search = search == null ? "" : search.Trim();
            var invoiceQuery = this.unitOfWork.CustomerInvoice.GetEntityDataTable(start, pageSize, a => a.InvoiceNumber.ToString().Contains(search), a => a.InvoiceNumber);
            var model = new DataTableDTO<SelectCustomerInvoiceDTOS>()
            {
                Data = mapper.Map<IEnumerable<SelectCustomerInvoiceDTOS>>(invoiceQuery),
                TotalCount = unitOfWork.CustomerInvoice.GetCount(a => a.InvoiceNumber.ToString().Contains(search))
            };
            return Ok(model);
        }


        [HttpPost]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult Post(CustomerInvocieDto customerInvocieDto)
        {
            string userID = User.GetUserId();
            var measurements =  context.Measurements.ToList();
            CustomerInvoice invoice = new CustomerInvoice()
            {
                CustomerID = customerInvocieDto.CustomerID,
                EmployeeID = userID,
                InvoiceDate = customerInvocieDto.InvoiceDate,
                InvoiceNumber = GetInvoiceNumber() +1,
                StoreID = customerInvocieDto.StoreID,


            };
            foreach (var item in customerInvocieDto.Details)
            {
                invoice.CustomerInvoiceDetails.Add(new CustomerInvoiceDetails()
                {
                    ProductID = item.ProductID,
                    Price = item.Price,
                    Quantity = unitOfWork.Measurement.ConvertToMainMeasurement(measurements, item.Quantity,(TypeOfMeasurements) item.TypeOfMeasurement),
                    ExpireDate = item.ExpireDate,

                }); ;
            }
            context.CustomerInvoice.Add(invoice);
            context.SaveChanges();
            return Ok(customerInvocieDto);
        }

        [HttpGet("/api/[controller]/GetReport/{ID}")]
        public IActionResult CustomerInvoiceReport(int ID)
        {
            using (SqlConnection connection = new SqlConnection(configuration.GetConnectionString("con")))
            {
                connection.Open();
                SqlCommand sqlCommand = new SqlCommand("sp_customer_invoice", connection);
                sqlCommand.CommandType = System.Data.CommandType.StoredProcedure;
                sqlCommand.Parameters.Add(new SqlParameter("@InvoiceID",ID));
               SqlDataReader reader = sqlCommand.ExecuteReader();
                DataTable table = new DataTable();
                table.Load(reader);
               
                LocalReport report = new LocalReport($"{this.iwebHostConfiguration.WebRootPath}//reports//sellingInvoice.rdlc");
                report.AddDataSource("DataSet1", table);

                var result = report.Execute(RenderType.Pdf, 1,null, "");
                return File(result.MainStream, "application/pdf");
            }
           
        }

        private int GetInvoiceNumber()
        {
            int ? invoiceNumber = this.context.CustomerInvoice.Max(a => (int?)a.InvoiceNumber);
            invoiceNumber = invoiceNumber == null ? 0 : invoiceNumber.Value;
            return invoiceNumber.Value;
        }

    }
}
