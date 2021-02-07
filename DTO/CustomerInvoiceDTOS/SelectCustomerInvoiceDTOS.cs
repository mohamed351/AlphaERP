using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RealApplication.DTO.CustomerInvoiceDTOS
{
    public class SelectCustomerInvoiceDTOS
    {
        public int InvoiceNumber { get; set; }

        public int CustomerInvoiceNumber { get; set; }

        public string StoreName { get; set; }

        public string CustomerName { get; set; }

        public string EmployeeName { get; set; }

        public DateTime InvoiceDate { get; set; }

        public decimal Amount { get; set; }
    }
}
