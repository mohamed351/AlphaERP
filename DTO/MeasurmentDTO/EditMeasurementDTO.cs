using RealApplication.Models.Enum;

namespace RealApplication.MeasurementDTO{
  public class EditMeasurementDTO{
     public int ID { get; set; }
      public string Name { get; set; }
      public TypeOfMeasurements MainType { get; set; }
      
  }
}