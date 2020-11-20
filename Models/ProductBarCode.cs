using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RealApplication.Models
{
     public class ProductBarCode
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string ID { get; set; }

        public string BarCodeValue { get; set; }

        public string ProductID { get; set; }
        [ForeignKey(nameof(ProductID))]
        public Product Product { get; set; }

        public string BarCodeDescription { get; set; }
    }
}