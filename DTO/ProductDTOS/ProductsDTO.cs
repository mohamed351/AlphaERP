using System.Collections.Generic;
using RealApplication.Models.Enum;

namespace RealApplication.DTO.ProductDTOS
{
    public class ProductsDTO
    {
        public ProductsDTO()
        {
           this.Measurements = new List<ProductMeasureDTO>(); 
        }
        public string ID { get; set; }
        public string ProductName { get; set; }
    
        public decimal SellingPrice { get; set; }

        public decimal PurchasingPrice{get;set;}

        public string CategoryID { get; set; }

        public string BarCode { get; set; }

        public string ProductImage { get; set; }

        public bool IsValidInPointOfSales { get; set; }

        public bool IsValidInStorage{get;set;}

        public bool IsValidOnline { get; set; }

        public int ProductNumber { get; set; }

        public TypeOfMeasurements TypeOfMeasurements { get; set; }
        public List<ProductMeasureDTO> Measurements { get; set; }

      //id: 14, measurementName: "Kilogram – كيلو جرام", isKnown: true, value: 1000, barCode: "2600"}

    }
}