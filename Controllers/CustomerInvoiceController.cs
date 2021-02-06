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

namespace RealApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerInvoiceController : ControllerBase
    {
        private readonly ApplicationDbContext context;

        public CustomerInvoiceController(ApplicationDbContext context)
        {
            this.context = context;
        }


        [HttpPost]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult Post(CustomerInvocieDto customerInvocieDto)
        {
            string userID = User.GetUserId();
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
                    Quantity = item.Quantity,
                    ExpireDate = item.ExpireDate,
                    
                });
            }
            context.CustomerInvoice.Add(invoice);
            context.SaveChanges();
            return Ok(customerInvocieDto);
        }

        private int GetInvoiceNumber()
        {
            int ? invoiceNumber = this.context.CustomerInvoice.Max(a => (int?)a.InvoiceNumber);
            invoiceNumber = invoiceNumber == null ? 0 : invoiceNumber.Value;
            return invoiceNumber.Value;
        }

    }
}
