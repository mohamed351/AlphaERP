using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace RealApplication.Models
{
    public class SupplymentDetail{
        public int ID { get; set; }
        [ForeignKey(nameof(SupplymentInvoice))]
        public int InvoiceID { get; set; }

        public SupplymentInvoice SupplymentInvoice { get; set; }


        public string ProductID { get; set; }

        public int UnitPrice { get; set; }

        public int Quantity { get; set; }

       public Nullable<DateTime> ExpireDate { get; set; }



    }
}