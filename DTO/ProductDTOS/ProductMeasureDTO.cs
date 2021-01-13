namespace RealApplication.DTO.ProductDTOS
{
    public class ProductMeasureDTO{
         public int ID { get; set; }
         public string MeasurementName { get; set; }
         public int Value { get; set; }

         public string BarCode { get; set; }

         public bool IsKnown { get; set; }

         public bool IsMain { get; set; }

         
    }
}