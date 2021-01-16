using System.Collections.Generic;

namespace RealApplication.DTO.ProductCategoryDTOS
{
    public class ProductCategoryDTO
    {
        public ProductCategoryDTO()
        {
            this.Products = new List<ProductInfoDTO>();
        }
        public string CategoryID { get; set; }
        
        public string CategoryName { get; set; }

        public IEnumerable<ProductInfoDTO> Products { get; set; }
        
    }
    public class ProductInfoDTO{
        public string ProductID { get; set; }

        public string ProductName { get; set; }
    }
    
}