using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RealApplication.Models
{
    public class Category
    {
        public Category()
        {
            this.Products = new List<Product>();
        }
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string ID { get; set; }
        public string Name { get; set; }

        public string CategoryID { get; set; }

        [ForeignKey(nameof(CategoryID))]
        public ICollection<Category> ChildCategory {get;set;}
        public ICollection<Product> Products { get; set; }



    }
}