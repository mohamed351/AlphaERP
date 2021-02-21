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

namespace RealApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerInvoiceController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        private readonly IUnitOfWork unitOfWork;
        private readonly IMapper mapper;

        public CustomerInvoiceController(ApplicationDbContext context, IUnitOfWork unitOfWork , IMapper mapper)
        {
            this.context = context;
            this.unitOfWork = unitOfWork;
            this.mapper = mapper;
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

        private int GetInvoiceNumber()
        {
            int ? invoiceNumber = this.context.CustomerInvoice.Max(a => (int?)a.InvoiceNumber);
            invoiceNumber = invoiceNumber == null ? 0 : invoiceNumber.Value;
            return invoiceNumber.Value;
        }

    }
}
