using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RealApplication.Models
{
    
    public class CustomerPhone
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string ID { get; set; }
        public string Phone { get; set; }
        [ForeignKey(nameof(Customer))]
        public string CustomerID { get; set; }
        public Customer Customer { get; set; }

    }
}