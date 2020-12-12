using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RealApplication.Models
{
    public class ProductMeasurements
    {
       
        public int MeasurementID { get; set; }

        
        public string ProductID {get;set;}

        [ForeignKey("MeasurementID")]
        public Measurement Measurement { get; set; }
        [ForeignKey("ProductID")]
        public Product Product {get;set;}

        public int Value { get; set; }
        


    }
}