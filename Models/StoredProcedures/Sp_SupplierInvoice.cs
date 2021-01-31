using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RealApplication.Models.StoredProcedures
{
    public class Sp_SupplierInvoice
    {
        public int InvoiceNumber { get; set; }
        public string EmployeeUserName { get; set; }
        public string Name { get; set; }
        public string ProductName { get; set; }
        public decimal UnitPrice { get; set; }
        public string  StoreName { get; set; }
        public string SupplierName { get; set; }

        public decimal Quantity { get; set; }

        public string Per { get; set; }

        public decimal TotalPrice { get; set; }



    }
}
