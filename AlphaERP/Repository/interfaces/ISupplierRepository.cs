using System.Threading.Tasks;
using RealApplication.Models;

namespace RealApplication.Repository.interfaces
{
    public interface ISupplierRepository:IRepository<Supplier, string>
    {
        Task<Supplier> GetSupplierByID(string ID);
        Task EditSupplierWithPhonesAndAddress(string ID,Supplier supplier);

    }
}