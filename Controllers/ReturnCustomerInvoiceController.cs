using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RealApplication.DTO.CustomerRefundDTOS;
using RealApplication.DTO.ReturnedSupplierInvoiceDTO;
using RealApplication.Extensions;
using RealApplication.Models;
using RealApplication.Models.Enum;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace RealApplication.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ReturnCustomerInvoiceController : ControllerBase
    {
        private readonly ApplicationDbContext context;

        public ReturnCustomerInvoiceController(ApplicationDbContext context)
        {
            this.context = context;
        }
        [HttpGet("{ID}")]
        public IActionResult Get(int ID)
        {   


            var query = context.ReturnedCustomerInvoiceDetails
                         .Include(a => a.ReturnedCustomerInvoice).
                          ThenInclude(a => a.CustomerInvoice).
                          Where(async => async.ReturnedCustomerInvoice.CustomerInvoice.InvoiceNumber == ID)
                          .ToList()
                          .GroupBy(a => a.DetailReference)
                          .Select(a => new { DetailReference = a.Key, Quantity = a.Sum(c => c.Quantity) });


            return Ok(query);

        }

        [HttpPost]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult Post(CustomerRefundDTO invoiceDTO)
        {

            var userId = User.GetUserId();
            var allMeasuremnets = context.Measurements.ToList();

            var invoice = new ReturnedCustomerInvoice()
            {
                InvoiceDate = DateTime.Now,
                InvoiceReferenceID = invoiceDTO.ID,
                Note = invoiceDTO.Note,
                UserID = userId


            };
            foreach (var item in invoiceDTO.CustomerInvoiceDetails)
            {
                invoice.ReturnedCustomerInvoiceDetails.Add(new ReturnedCustomerInvoiceDetails()
                {

                    UnitPrice = item.Price,
                    Quantity = ConvertMeasurement(allMeasuremnets, item.NewQuantity,(TypeOfMeasurements) item.Product.TypeOfMeasurement),
                    ProductID = item.ProductID,
                    Serial = item.Serial,
                    ExpireDate = item.ExpireDate,
                    DetailReference = item.ID

                });
            }
            context.ReturnedCustomerInvoices.Add(invoice);
            context.SaveChanges();

            return Ok(invoiceDTO);
        }
        private decimal ConvertMeasurement(List<Measurement> measurements, decimal qtu, TypeOfMeasurements measurementType)
        {
            var mainMeasure = measurements
                .FirstOrDefault(a => a.IsMain && a.MainType == measurementType);
            if (mainMeasure == null)
                return 0;

            return mainMeasure.defaultValue * qtu;
        }

    }
}
