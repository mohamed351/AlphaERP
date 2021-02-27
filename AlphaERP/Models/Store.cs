using System.Collections.Generic;

namespace RealApplication.Models
{
    public class Store
    { 
         public int ID { get; set; }
        public string Name { get; set; }
        public bool IsDelete { get; set; }

        public ICollection<ProductStore> ProductStores { get; set; }
        
        public ICollection<SupplymentInvoice> SupplymentInvoices { get; set; }


    }
}