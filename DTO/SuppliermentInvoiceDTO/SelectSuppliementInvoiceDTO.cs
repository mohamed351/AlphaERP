using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RealApplication.DTO.SuppliermentInvoiceDTO
{
    public class SelectSuppliementInvoiceDTO
    {
        public int InvoiceNumber { get; set; }

        public int SupplierInvoiceNumber { get; set; }

        public DateTime InvoiceDate { get; set; }

        public string SupplierName { get; set; }

        public string StoreName { get; set; }

        public string EmployeeName { get; set; }

        public decimal Amount { get; set; }

    }
}
