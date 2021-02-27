using System.Collections.Generic;
namespace RealApplication.DTO.ProductDTOS
{
    public class ProductBarCodeSearchDTO
    {
        public ProductBarCodeSearchDTO()
        {
    
        }
        public List<string> BarCodes { get; set; }

        public string Product { get; set; }

        public string ProductID { get; set; }
    }
}