using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace RealApplication.Models
{
    public class ReturnedCustomerInvoice
    {
        public ReturnedCustomerInvoice()
        {
            this.ReturnedCustomerInvoiceDetails = new HashSet<ReturnedCustomerInvoiceDetails>();
        }
        public int ID { get; set; }
        public int InvoiceNumber { get; set; }
        [ForeignKey(nameof(CustomerInvoice))]
        public int InvoiceReferenceID { get; set; }
        public string Note { get; set; }
        public CustomerInvoice CustomerInvoice { get; set; }
        public DateTime? InvoiceDate { get; set; }

        public ICollection<ReturnedCustomerInvoiceDetails> ReturnedCustomerInvoiceDetails { get; set; }


    }
}
