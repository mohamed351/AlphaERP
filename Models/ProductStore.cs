using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace RealApplication.Models
{
    public class ProductStore
    {
     [ForeignKey(nameof(Store))]
       public int StoreID { get; set; }

       public Store Store { get; set; }
       [ForeignKey(nameof(Product))]
       public string ProductID { get; set; }

       public Product Product { get; set; }
      public DateTime ProductEnteredIn {get;set;}

     
       public decimal UnitPrice { get; set; }

       public Nullable<DateTime> ExpireDate { get; set; }

       public Nullable<DateTime> ProductionDate {get;set;}

       public int Quantity {get;set;}
       public string Serial { get; set; }

    }
}