using System;

namespace RealApplication.DTO.CustomerRefundDTOS
{
    public class CustomerInvoiceDetailDTO
    {
        public ProductDTO Product { get; set; }
        public int ID { get; set; }
        public int InvoiceID { get; set; }
        public string ProductID { get; set; }
        public int Price { get; set; }
        public int Quantity { get; set; }
        public DateTime ExpireDate { get; set; }
        public int NewQuantity { get; set; }
        public string Serial { get; set; }
    }


}
