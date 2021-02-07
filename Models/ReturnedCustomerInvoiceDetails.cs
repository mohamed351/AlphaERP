using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace RealApplication.Models
{
    public class ReturnedCustomerInvoiceDetails
    {
        public int ID { get; set; }
        [ForeignKey(nameof(Product))]
        public string ProductID { get; set; }
        [ForeignKey(nameof(ReturnedCustomerInvoice))]
        public  int InvoiceID { get; set; }


        public Product Product { get; set; }

        public decimal Quantity { get; set; }
        public decimal UnitPrice { get; set; }
        public DateTime? ExpireDate { get; set; }
        public string Serial { get; set; }
        public ReturnedCustomerInvoice ReturnedCustomerInvoice { get; set; }

    }
}
