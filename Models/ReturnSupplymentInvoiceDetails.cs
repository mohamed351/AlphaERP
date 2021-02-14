using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace RealApplication.Models
{
    public class ReturnSupplymentInvoiceDetails
    {
        public int ID { get; set; }

        [ForeignKey(nameof(Product))]
        public string ProductID { get; set; }
        [ForeignKey(nameof(ReturendSupplymentInvoice))]
        public int InvoiceID { get; set; }
        
        public ReturnSupplymentInvoice ReturendSupplymentInvoice { get; set; }

        public Product Product { get; set; }

        public decimal Quantity { get; set; }

        public decimal Price { get; set; }

        public DateTime? ExpireDate { get; set; }

        public string Serial { get; set; }
        /// <summary>
        /// The ID of Invoice Details because i want to get that ID  for quantity calculation 
        /// </summary>
        public int DetailReference { get; set; }

    }
}
