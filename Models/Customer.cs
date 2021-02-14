using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RealApplication.Models
{
    /// <summary>
    /// Represent a customer in Our Database and Our System
    /// </summary>
   public class Customer
    {
        /// <summary>
        /// use to Initialize The List because I don't want NULL Reference Exception happend when I add
        /// or Convert DTO to Customer 
        /// </summary>
        public Customer()
        {
            this.Phones = new HashSet<CustomerPhone>();
            this.CustomerAddresses = new HashSet<CustomerAddress>();
            this.CustomerInvoices = new HashSet<CustomerInvoice>();

        }
        /// <summary>
        /// Customer ID which is a GUID
        /// </summary>
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string ID { get; set; }
        /// <summary>
        /// Customer Name 
        /// </summary>
        public string CustomerName { get; set; }
        /// <summary>
        /// List of Customers  phones
        /// </summary>
        public ICollection<CustomerPhone>   Phones { get; set; }
        /// <summary>
        /// List of Customer Address
        /// </summary>
        public ICollection<CustomerAddress> CustomerAddresses { get; set; }
        /// <summary>
        /// Flag that prevent of Deleting Customer
        /// And we should display if customer IsDeleted = false
        /// </summary>
        public bool IsDeleted { get; set; }
        /// <summary>
        /// Customer has many Invoices he bought many items 
        /// and that item should appear in Invoices
        /// </summary>
        public ICollection<CustomerInvoice> CustomerInvoices { get; set; }


    }
}