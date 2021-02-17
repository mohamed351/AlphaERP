using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.OData;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RealApplication.DTO.ReturnedSupplierInvoiceDTO;
using RealApplication.Models;
using RealApplication.Extensions;
using RealApplication.Models.Enum;

namespace RealApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReturnSupplymentInvoiceController : ControllerBase
    {
        private readonly ApplicationDbContext dbContext;

        public ReturnSupplymentInvoiceController(ApplicationDbContext dbContext )
        {
            this.dbContext = dbContext;
        }
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns> 
         [EnableQuery()]
        [HttpGet(template: "DataO")]
        public IActionResult GetAllReturnedInvoice()
        {
            return Ok(dbContext.ReturnSupplymentInvoices);
        }
      
        /// <summary>
        /// Remember> This is Function need to refeactor with same 
        /// </summary>
        /// <param name="ID"></param>
        /// <returns></returns>
        [HttpGet("{ID}")]
        public IActionResult Get(int ID)
        {
   

            var query = dbContext.ReturnSupplymentInvoiceDetails
                         .Include(a => a.ReturendSupplymentInvoice).
                          Where(async => async.ReturendSupplymentInvoice.InvoiceReferenceID == ID)
                          .ToList()
                          .GroupBy(a => a.DetailReference)
                          .Select(a => new { DetailReference= a.Key , Quantity= a.Sum(c=>c.Quantity) });
                        
                       
            return Ok(query);

        }

        [HttpPost]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult Post(ReturnedSupplierInvoiceDTO invoiceDTO)
        {
          
            var userId = User.GetUserId();
            var allMeasuremnets = dbContext.Measurements.ToList();
            
            var invoice = new ReturnSupplymentInvoice()
            {
                InvoiceDate = DateTime.Now,
                InvoiceReferenceID = invoiceDTO.ID,
                Note = invoiceDTO.Note,
                UserID= userId
               

            };
            foreach (var item in invoiceDTO.InvoiceDetails)
            {
                invoice.ReturnSupplymentInvoiceDetails.Add(new ReturnSupplymentInvoiceDetails()
                {
                     
                    Price = item.UnitPrice,
                    Quantity = ConvertMeasurement(allMeasuremnets,item.NewQuantity,item.Product.TypeOfMeasurement),
                    ProductID = item.ProductID,
                    Serial = item.Serial,
                    ExpireDate = item.ExpireDate,
                    DetailReference = item.ID

                });
            }
            dbContext.ReturnSupplymentInvoices.Add(invoice);
            dbContext.SaveChanges();
            
            return Ok(invoiceDTO);
        }
        private decimal ConvertMeasurement(List<Measurement> measurements,decimal qtu,TypeOfMeasurements measurementType)
        {
            var mainMeasure = measurements
                .FirstOrDefault(a => a.IsMain && a.MainType == measurementType);
            if(mainMeasure == null)
                return 0;

            return mainMeasure.defaultValue * qtu;
        }

    }
}
