using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace RealApplication.Models
{
    public class SupplymentInvoice
    {
        public SupplymentInvoice()
        {
            this.InvoiceDetails = new List<SupplymentDetail>();
        }
        public int ID { get; set; }
        [ForeignKey(nameof(Supplier))]
        public string SupplierID { get; set; }
        [ForeignKey(nameof(Employee))]
        public string  EmployeeID { get; set; }
        [ForeignKey(nameof(Store))]
       public int StoreID {get;set;}

        public int InvoiceNumber{get;set;}

        public DateTime SupplymentDate { get; set; }

        public bool IsCancelled {get;set;}

        public Employee Employee { get; set; }

        public Supplier Supplier { get; set; }

        public Store Store {get;set;}

        public ICollection<SupplymentDetail> InvoiceDetails { get; set; }

      

    }
}