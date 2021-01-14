using Microsoft.EntityFrameworkCore;
using RealApplication.Models;
using System.Collections.Generic;

namespace RealApplication.Repository.Implementation
{
    public class SupplymentInvoiceRepository : Repository<SupplymentInvoice, int>
    {
        private readonly DbContext dbContext;

        public SupplymentInvoiceRepository(DbContext dbContext) 
        : base(dbContext)
        {
            this.dbContext = dbContext;
        }

        public void AddInvoice(int newNumber){

            // this.dbContext.Set<SupplymentInvoice>()
            // .Add(new SupplymentInvoice(){
            //     EmployeeID = 
            // })

        }
    }
    public class SupplymentDTO{
        public string SupplierID { get; set; }

        public int StoreID { get; set; }

        public string UserID {get;set;}

        public System.DateTime InvoiceDate { get; set; }

        public  IEnumerable<SupplymentDetailsDTO> SupplymentDetails {get;set;}



    }
    public class SupplymentDetailsDTO{
        public decimal Price { get; set; }
        public int Quantity { get; set; }

        public string ProductID { get; set; }

        public System.DateTime ExpireDate { get; set; }

        public string   Serial { get; set; }

    }
 

}