using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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
        public IActionResult Get()
        {
            return Ok();
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
                    ExpireDate = item.ExpireDate

                });
            }
            dbContext.ReturnSupplymentInvoices.Add(invoice);
            dbContext.SaveChanges();
            
            return Ok(invoiceDTO);
        }

    }
}
