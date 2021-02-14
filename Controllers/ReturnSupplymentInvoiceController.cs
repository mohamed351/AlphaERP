using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RealApplication.DTO.ReturnedSupplierInvoiceDTO;
using RealApplication.Models;

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
        /// Remember> This is Function need to refeactor with same 
        /// </summary>
        /// <param name="ID"></param>
        /// <returns></returns>
        [HttpGet("{ID}")]
        public IActionResult Get(int ID)
        {
            //var query = dbContext.ReturnSupplymentInvoices
            //       .Include(a => a.).Where(a => a.InvoiceReferenceID == ID)
            //       .Select(a => new { quantity = a.ReturnSupplymentInvoiceDetails.Sum(a => a.Quantity), a. });

            var query = dbContext.ReturnSupplymentInvoiceDetails
                         .Include(a => a.ReturendSupplymentInvoice).
                          Where(async => async.ReturendSupplymentInvoice.InvoiceReferenceID == ID)
                          .ToList()
                          .GroupBy(a => a.DetailReference)
                          .Select(a => new { DetailReference= a.Key , Quantity= a.Sum(c=>c.Quantity) });
                        
                       
                        
                
                
                
                  
            return Ok(query);

        }

        [HttpPost]
        public IActionResult Post(ReturnedSupplierInvoiceDTO invoiceDTO)
        {
            var invoice = new ReturnSupplymentInvoice()
            {
                InvoiceDate = DateTime.Now,
                InvoiceReferenceID = invoiceDTO.ID,
                Note = "",
                

            };
            foreach (var item in invoiceDTO.InvoiceDetails)
            {
                invoice.ReturnSupplymentInvoiceDetails.Add(new ReturnSupplymentInvoiceDetails()
                {

                    Price = item.UnitPrice,
                    Quantity = item.NewQuantity,
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

    }
}
