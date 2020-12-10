using RealApplication.Models.Enum;

namespace RealApplication.MeasurementDTO{
  public class CreateMeasurementDTO{
     
      public string Name { get; set; }
      public TypeOfMeasurements MainType { get; set; }
      
  }
}