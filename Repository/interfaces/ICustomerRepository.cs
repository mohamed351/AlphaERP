using RealApplication.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RealApplication.Repository.interfaces
{
    public interface ICustomerRepository:IRepository<Customer,string>
    {
         Task<Customer> GetAllCustomers(string ID);
         
    }
}