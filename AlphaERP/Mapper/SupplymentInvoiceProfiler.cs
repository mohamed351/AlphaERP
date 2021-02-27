using AutoMapper;
using RealApplication.DTO.SuppliermentInvoiceDTO;
using RealApplication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RealApplication.Mapper
{
    public class SupplymentInvoiceProfiler:Profile
    {
        public SupplymentInvoiceProfiler()
        {
            this.CreateMap<SupplymentInvoice, SelectSuppliementInvoiceDTO>()
                .ForMember(a => a.InvoiceNumber, a => a.MapFrom(a => a.InvoiceNumber))
                .ForMember(a => a.SupplierInvoiceNumber, a => a.MapFrom(a => a.InvoiceNumber))
                .ForMember(a => a.InvoiceDate, a => a.MapFrom(a => a.SupplymentDate))
                .ForMember(a => a.SupplierName, a => a.MapFrom(a => a.Supplier.Name))
                .ForMember(a => a.StoreName, a => a.MapFrom(a => a.Store.Name))
                .ForMember(a => a.Amount, a => a.MapFrom(a => a.InvoiceDetails.Sum(a => a.Quantity * a.UnitPrice)))
                .ForMember(a => a.EmployeeName, a => a.MapFrom(a => a.Employee.UserName));
                
                
                
        }
       
    }
}
