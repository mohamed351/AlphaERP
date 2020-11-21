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

        public async Task<Customer> GetAllCustomerData(string ID)
        {
           return await dbContext.Set<Customer>().Include(a=>a.CustomerAddresses)
           .Include(async=>async.CustomerAddresses).FirstOrDefaultAsync(async=>async.ID == ID);
        }


        public async Task EditCustomerWithTheirPhonesAndAddrss(string ID, Customer customer)
        {
              var OldCustomerData = await GetAllCustomerData(ID);
              OldCustomerData.CustomerName = customer.CustomerName;
              OldCustomerData.CustomerAddresses.Clear();
              OldCustomerData.Phones.Clear();
             customer.CustomerAddresses.Each(action=> OldCustomerData.CustomerAddresses.Add(new CustomerAddress(){ Address = action.Address}));
             customer.Phones.Each(action => OldCustomerData.Phones.Add(new CustomerPhone() { Phone = action.Phone}));
             
        }

      
    }
}