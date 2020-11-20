using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RealApplication.Models;
using RealApplication.Repository.interfaces;


namespace RealApplication.Repository.Implementation
{
    public class CustomerRepository:Repository<Customer, string>, ICustomerRepository
    {
        private readonly DbContext dbContext;

        public CustomerRepository(DbContext dbContext)
            : base(dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task<Customer> GetAllCustomers(string ID)
        {
           return await dbContext.Set<Customer>().Include(a=>a.CustomerAddresses)
           .Include(async=>async.CustomerAddresses).FirstOrDefaultAsync(async=>async.ID == ID);
        }
    }
}