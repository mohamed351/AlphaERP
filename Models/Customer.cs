using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RealApplication.Models
{
   public class Customer
    {
        public Customer()
        {
            this.Phones = new HashSet<CustomerPhone>();
            this.CustomerAddresses = new HashSet<CustomerAddress>();

        }
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string ID { get; set; }
        public string CustomerName { get; set; }
        public ICollection<CustomerPhone>   Phones { get; set; }
        public ICollection<CustomerAddress> CustomerAddresses { get; set; }
        public bool IsDeleted { get; set; }


    }
}