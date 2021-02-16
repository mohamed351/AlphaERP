using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace RealApplication.Models
{
    public class ReturnSupplymentInvoice
    {
        public ReturnSupplymentInvoice()
        {
            this.ReturnSupplymentInvoiceDetails = new List<ReturnSupplymentInvoiceDetails>();
        }
        public int ID { get; set; }
        public DateTime InvoiceDate { get; set; }
        [ForeignKey(nameof(SupplymentInvoice))]
        public int InvoiceReferenceID { get; set; }

        public string Note { get; set; }

        [ForeignKey(nameof(Employee))]
        public string UserID { get; set; }


        public Employee Employee { get; set; }

        public ICollection<ReturnSupplymentInvoiceDetails> ReturnSupplymentInvoiceDetails { get; set; }
        public SupplymentInvoice SupplymentInvoice { get; set; }
        

       
    }
}
