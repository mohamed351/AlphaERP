using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RealApplication.DTO.SuppliermentInvoiceDTO
{
    public class CreateSuppliermentInvoiceDTO
    {
        public CreateSuppliermentInvoiceDTO()
        {
            this.details = new List<CreateSuppliermentInvoiceDetailsDTO>();
        }

        public string SupplierId { get; set; }
        public int StoreId { get; set; }
        public DateTime Invoicedate { get; set; }
        public string Note { get; set; }
        public List<CreateSuppliermentInvoiceDetailsDTO> details { get; set; }
    }

    public class CreateSuppliermentInvoiceDetailsDTO
    {
        public string ProductID { get; set; }
        public decimal Quantity { get; set; }
        public DateTime ExpireDate { get; set; }
        public string BarCode { get; set; }
        public decimal Price { get; set; }
        public string MeasurementName { get; set; }
        public string ProductSerial { get; set; }
        public int TypeOfMeasurement { get; set; }
        public decimal MeasurementValue { get; set; }
    }

}
