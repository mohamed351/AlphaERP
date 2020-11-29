using System.Threading.Tasks;
using RealApplication.Models;
namespace RealApplication.Repository.interfaces
{
    public interface IProductRepository:IRepository<Product,string>
    {
     Task<int> GetProductNumber();


    }
}