using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RealApplication.Models
{
    public class CustomerAddress
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string ID { get; set; }

        public string Address { get; set; }
        [ForeignKey(nameof(Customer))]
        public string CustomerID { get; set; }
        public Customer Customer { get; set; }
    }
}