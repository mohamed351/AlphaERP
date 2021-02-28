using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RealApplication.DTO.CustomerRefundDTOS
{

    public class CustomerRefundDTO
    {
        public CustomerDTO Customer { get; set; }
        public EmployeeDTO Employee { get; set; }
        public StoreDTO Store { get; set; }
        public List<CustomerInvoiceDetailDTO> CustomerInvoiceDetails { get; set; }
        public int ID { get; set; }
        public string CustomerID { get; set; }
        public string EmployeeID { get; set; }
        public int StoreID { get; set; }
        public int InvoiceNumber { get; set; }
        public DateTime InvoiceDate { get; set; }
        public string Note { get; set; }
       
    }


}
