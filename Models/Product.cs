using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using RealApplication.Models.Enum;

namespace RealApplication.Models
{
    public class Product
    {
        public Product()
        {
            this.ProductBarCodes = new HashSet<ProductBarCode>();
        }
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string ID { get; set; }
        public string ProductName { get; set; }

        public decimal SellingPrice { get; set; }
        public decimal PurchasingPrice { get; set; }
        [EnumDataType(typeof(TypeOfMeasurements))]
        public TypeOfMeasurements TypeOfMeasurement { get; set; }

        public bool IsDeleted { get; set; }

        [ForeignKey(nameof(Category))]
        public string CategoryID { get; set; }

        public Category Category { get; set; }

        public ICollection<ProductBarCode>  ProductBarCodes { get; set; }
    }
}