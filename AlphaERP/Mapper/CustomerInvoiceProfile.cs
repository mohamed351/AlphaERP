using AutoMapper;
using RealApplication.DTO.CustomerInvoiceDTOS;
using RealApplication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RealApplication.Mapper
{
    public class CustomerInvoiceProfile:Profile
    {
        public CustomerInvoiceProfile()
        {
            this.CreateMap<CustomerInvoice, SelectCustomerInvoiceDTOS>()
                .ForMember(a => a.CustomerName, a => a.MapFrom(a => a.Customer.CustomerName))
                .ForMember(a => a.CustomerInvoiceNumber, a => a.MapFrom(a => a.InvoiceNumber))
                 .ForMember(a=>a.InvoiceNumber, a=>a.MapFrom(a=>a.InvoiceNumber))
                .ForMember(a => a.EmployeeName, a => a.MapFrom(a => a.Employee.UserName))
                .ForMember(a => a.StoreName, a => a.MapFrom(a => a.Store.Name))
                .ForMember(a => a.InvoiceDate, a => a.MapFrom(a => a.InvoiceDate))
                .ForMember(a => a.Amount, a => a.MapFrom(a => a.CustomerInvoiceDetails.Sum(a => a.Price * a.Quantity)));


        }
    }
}
