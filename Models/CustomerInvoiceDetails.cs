using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace RealApplication.Models
{
    public class CustomerInvoiceDetails
    {
        public int ID { get; set; }
        [ForeignKey(nameof(CustomerInvoice))]
        public int InvoiceID { get; set; }
        [ForeignKey(nameof(Product))]
        public string ProductID { get; set; }
        public decimal Price { get; set; }

        public decimal Quantity { get; set; }
        public Nullable<DateTime> ExpireDate { get; set; }

        public CustomerInvoice CustomerInvoice { get; set; }
        public Product Product { get; set; }

    }
}
