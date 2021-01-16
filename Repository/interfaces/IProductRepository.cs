using System.Collections.Generic;
using System.Threading.Tasks;
using RealApplication.Models;
namespace RealApplication.Repository.interfaces
{
    public interface IProductRepository:IRepository<Product,string>
    {
     Task<int> GetProductNumber();
     Task<string> GetOldImage(string productId);
    Product GetProductWithMesasurementById(string productID);
    bool ValidateName(string ProductID , string ProductName);
    bool ValidateBarCode(string productID, string productBarCode);

    }
}