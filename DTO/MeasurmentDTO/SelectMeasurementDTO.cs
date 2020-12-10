using RealApplication.Models.Enum;

namespace RealApplication.MeasurementDTO{
  public class SelectMeasurementDTO{
     public int ID { get; set; }
      public string Name { get; set; }
      public TypeOfMeasurements MainType { get; set; }
      
  }
}