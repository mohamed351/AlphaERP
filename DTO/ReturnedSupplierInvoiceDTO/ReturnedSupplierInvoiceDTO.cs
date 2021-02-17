using RealApplication.Models.Enum;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RealApplication.DTO.ReturnedSupplierInvoiceDTO
{
    // Root myDeserializedClass = JsonConvert.DeserializeObject<Root>(myJsonResponse); 
    public class ReturnedEmployee
    {
        public string Id { get; set; }
        public string UserName { get; set; }
    }

    public class ReturedSupplier
    {
        public string ID { get; set; }
        public string Name { get; set; }
    }

    public class ReturnedStore
    {
        public int ID { get; set; }
        public string Name { get; set; }
    }

    public class ReturnedProduct
    {
        public string ID { get; set; }
        public string ProductName { get; set; }
        public TypeOfMeasurements TypeOfMeasurement { get; set; }
    }

    public class ReturnedInvoiceDetailDTO
    {
        public ReturnedInvoiceDetailDTO()
        {
            this.Product = new ReturnedProduct();
        }
        public ReturnedProduct Product { get; set; }
        public int ID { get; set; }
        public int InvoiceID { get; set; }
        public string ProductID { get; set; }
        public decimal UnitPrice { get; set; }
        public decimal Quantity { get; set; }
        public DateTime? ExpireDate { get; set; }
        public string Serial { get; set; }
        public decimal NewQuantity { get; set; }
    }
    

    public class ReturnedSupplierInvoiceDTO
    {
        public ReturnedSupplierInvoiceDTO()
        {
            this.Employee = new ReturnedEmployee();
            this.Supplier = new ReturedSupplier();
            this.Store = new ReturnedStore();
            this.InvoiceDetails = new List<ReturnedInvoiceDetailDTO>();
        }
        public ReturnedEmployee Employee { get; set; }
        public ReturedSupplier Supplier { get; set; }
        public ReturnedStore Store { get; set; }
        public List<ReturnedInvoiceDetailDTO> InvoiceDetails { get; set; }
        public int ID { get; set; }
        public int InvoiceNumber { get; set; }
        public string Note { get; set; }
    }
}
