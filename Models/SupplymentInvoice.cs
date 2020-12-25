using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace RealApplication.Models
{
    public class SupplymentInvoice
    {
        public int ID { get; set; }
        [ForeignKey(nameof(Supplier))]
        public string SupplierID { get; set; }
        [ForeignKey(nameof(Employee))]
        public string  EmployeeID { get; set; }
      

        public int InvoiceNumber{get;set;}

        public DateTime SupplymentDate { get; set; }

        public bool IsCancelled {get;set;}

        public Employee Employee { get; set; }

        public Supplier Supplier { get; set; }

        public ICollection<SupplymentDetail> InvoiceDetails { get; set; }

      

    }
}