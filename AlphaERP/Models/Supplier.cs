using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RealApplication.Models
{
     public class Supplier
    {
        public Supplier()
        {
            this.Phones = new HashSet<SupplierPhone>();
            this.SupplierAddresses = new HashSet<SupplierAddress>();
        }
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string ID  { get; set; }
        public string Name { get; set; }
        public ICollection<SupplierPhone> Phones { get; set; }
        public ICollection<SupplierAddress> SupplierAddresses { get; set; }
        public bool IsDeleted { get; set; }
    }
}