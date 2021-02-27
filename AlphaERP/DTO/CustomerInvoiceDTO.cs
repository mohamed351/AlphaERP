using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RealApplication.DTO
{
    public class CustomerInvoiceDetailsDTO
    {
        public string ProductID { get; set; }
        public decimal Quantity { get; set; }
        public DateTime? ExpireDate { get; set; }
        public string BarCode { get; set; }
        public int Price { get; set; }
        public string MeasurementName { get; set; }
        public string ProductSerial { get; set; }
        public int TypeOfMeasurement { get; set; }
        public int MeasurementValue { get; set; }
    }

    public class CustomerInvocieDto
    {
        public CustomerInvocieDto()
        {
            this.Details = new List<CustomerInvoiceDetailsDTO>();
        }
        public string CustomerID { get; set; }
        public int StoreID { get; set; }
        public DateTime InvoiceDate { get; set; }
        public string Note { get; set; }
        public List<CustomerInvoiceDetailsDTO> Details { get; set; }
    }
}
