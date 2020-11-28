using RealApplication.Models.Enum;

namespace RealApplication.DTO.ProductDTOS
{
    public class ProductsDTO
    {
        public string ID { get; set; }
        public string ProductName { get; set; }
    
        public decimal SellingPrice { get; set; }

        public decimal PurchasingPrice{get;set;}

        public string CategoryID { get; set; }

        public string BarCode { get; set; }

        public bool IsValidInPointOfSales { get; set; }

        public bool IsValidInStorage{get;set;}

        public TypeOfMeasurements TypeOfMeasurements { get; set; }



    }
}