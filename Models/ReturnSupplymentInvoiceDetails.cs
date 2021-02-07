using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace RealApplication.Models
{
    public class ReturnSupplymentInvoiceDetails
    {
        public int ID { get; set; }

        [ForeignKey(nameof(Product))]
        public string ProductID { get; set; }

        public Product Product { get; set; }

        public decimal Quantity { get; set; }

        public decimal Price { get; set; }

        public DateTime? ExpireDate { get; set; }

        public string Serial { get; set; }

    }
}
