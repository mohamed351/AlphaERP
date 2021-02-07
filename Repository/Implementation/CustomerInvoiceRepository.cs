using Microsoft.EntityFrameworkCore;
using RealApplication.Models;
using RealApplication.Repository.interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RealApplication.Repository.Implementation
{
    public class CustomerInvoiceRepository : Repository<CustomerInvoice, int>, ICustomerInvoiceRepository
    {
        private readonly DbContext dbContext;

        public CustomerInvoiceRepository(DbContext dbContext) :
            base(dbContext)
        {
            this.dbContext = dbContext;
        }

        public override IEnumerable<CustomerInvoice> GetEntityDataTable(int PageStart, int PageSize, Func<CustomerInvoice, bool> condition, Func<CustomerInvoice, int> orderBy)
        {
             return dbContext.Set<CustomerInvoice>()
             .Include(a=>a.Customer)
             .Include(a=>a.Store)
             .Include(a=>a.Employee)
             .Include(a=>a.CustomerInvoiceDetails)
            .Where(condition)
            .OrderBy(orderBy)
            .Skip(PageSize * PageStart)
            .Take(PageSize).ToList();
        }


    }
}
