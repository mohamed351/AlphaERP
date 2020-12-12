
using RealApplication.Models.Enum;

namespace RealApplication.Models
{  
  public class Measurement{
      public int ID { get; set; }
      public string Name { get; set; }
      public TypeOfMeasurements MainType { get; set; }

      public bool IsDeleted { get; set; }
      
  }
}