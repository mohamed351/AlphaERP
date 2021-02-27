using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace RealApplication.Models
{
    public class SupplymentDetail{
        public int ID { get; set; }
        [ForeignKey(nameof(SupplymentInvoice))]
        public int InvoiceID { get; set; }

        public SupplymentInvoice SupplymentInvoice { get; set; }

        [ForeignKey(nameof(Product))]
        public string ProductID { get; set; }

        public Product Product {get;set;}

        public decimal UnitPrice { get; set; }

        public decimal Quantity { get; set; }

       public Nullable<DateTime> ExpireDate { get; set; }

        public string Serial { get; set; }



    }
}