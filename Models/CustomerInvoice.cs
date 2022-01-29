using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace RealApplication.Models
{
    public class CustomerInvoice
    {
        public CustomerInvoice()
        {
           
            this.CustomerInvoiceDetails = new  HashSet<CustomerInvoiceDetails>();
            this.ReturnedCustomerInvoices = new HashSet<ReturnedCustomerInvoice>();
        }
        public int ID { get; set; }
        [ForeignKey(nameof(Customer))]
        public string CustomerID { get; set; }
        [ForeignKey(nameof(Employee))]
        public string EmployeeID { get; set; }
        [ForeignKey(nameof(Store))]
        public int StoreID { get; set; }

        public int InvoiceNumber { get; set; }

        public DateTime InvoiceDate { get; set; }

        public string Note { get; set; }
        public InvoiceType InvoiceType { get; set; }

        public Customer Customer { get; set; }
        public Employee Employee { get; set; }
        public Store Store { get; set; }

       

        public ICollection<CustomerInvoiceDetails> CustomerInvoiceDetails { get; set; }
        public ICollection<ReturnedCustomerInvoice> ReturnedCustomerInvoices { get; set; }

    }
}
