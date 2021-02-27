using Microsoft.EntityFrameworkCore;
using RealApplication.Models;
using RealApplication.Repository.interfaces;
using System;
using System.Collections.Generic;
using System.Linq;

namespace RealApplication.Repository.Implementation
{
    public class SupplymentInvoiceRepository : Repository<SupplymentInvoice, int>, ISupplymentInvoiceRepository
    {
        private readonly DbContext dbContext;

      
        public SupplymentInvoiceRepository(DbContext dbContext) 
        : base(dbContext)
        {
            this.dbContext = dbContext;
        }

        public override SupplymentInvoice GetByID(int key)
        {
            return dbContext.Set<SupplymentInvoice>()
                .Include(a => a.InvoiceDetails)
                .FirstOrDefault(a => a.ID == key);
                
        }

        public override IEnumerable<SupplymentInvoice> GetEntityDataTable(int PageStart, int PageSize, Func<SupplymentInvoice, bool> condition, Func<SupplymentInvoice, int> orderBy)
        {
            return dbContext.Set<SupplymentInvoice>()
           .Include(a=>a.InvoiceDetails)
           .Include(a=>a.Employee)
           .Include(a=>a.Store)
           .Include(a=>a.Supplier)
           .Where(condition)
           .OrderBy(orderBy)
           .Skip(PageSize * PageStart)
            .Take(PageSize).ToList();
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