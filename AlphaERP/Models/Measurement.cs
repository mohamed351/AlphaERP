
using System.Collections.Generic;
using RealApplication.Models.Enum;

namespace RealApplication.Models
{  
  public class Measurement{
      public int ID { get; set; }
      public string Name { get; set; }
      public TypeOfMeasurements MainType { get; set; }

      public bool IsDeleted { get; set; }

      public bool IsKnown { get; set; }

      public int defaultValue { get; set; }

      public bool IsMain { get; set; }

      public ICollection<ProductMeasurements> ProductMeasurements { get; set; }
      
  }
}