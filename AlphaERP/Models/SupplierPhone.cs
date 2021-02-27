using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RealApplication.Models
{
     public class SupplierPhone
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string ID { get; set; }
        public string Phone { get; set; }

        public string SupplierID { get; set; }
        [ForeignKey(nameof(SupplierID))]
        public Supplier Supplier { get; set; }



    }
}