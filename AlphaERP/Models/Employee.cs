using Microsoft.AspNetCore.Identity;
using System.Collections;
using System.Collections.Generic;

namespace RealApplication.Models
{
     public class Employee:IdentityUser
    {
        public Employee()
        {
            this.CustomerInvoices = new HashSet<CustomerInvoice>();
            this.SupplymentInvoices = new HashSet<SupplymentInvoice>();
        }
        public ICollection<CustomerInvoice>  CustomerInvoices { get; set; }
        public ICollection<SupplymentInvoice> SupplymentInvoices { get; set; }

    }
}