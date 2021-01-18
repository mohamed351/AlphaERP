using RealApplication.Repository.interfaces;
using RealApplication.Repository.Implementation;
using RealApplication.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Linq;
using System.Collections.Generic;

namespace RealApplication.Repository.Implementation
{
    public class ProductRepository : Repository<Product, string>, IProductRepository
    {
        private readonly DbContext dbContext;
        public ProductRepository(DbContext dbContext) : base(dbContext)
        {
            this.dbContext = dbContext;

        }
        public  Product GetProductWithMesasurementById(string productID){
          
          return this.dbContext.Set<Product>()
          .Include(a=> a.ProductMeasurements)
          .ThenInclude(a=>a.Measurement)
          .FirstOrDefault(a=>a.ID == productID);
    
        }
        public bool ValidateName(string ProductID , string ProductName){
            ProductName = ProductName.Trim();
           if(string.IsNullOrEmpty(ProductID)){
               return !dbContext.Set<Product>().Any(a=>a.ProductName == ProductName);
           } 
           else{
               return !dbContext.Set<Product>().Any(a=>a.ProductName == ProductName && a.ID != ProductID);
           }
        }

        public bool ValidateBarCode(string productID, string productBarCode){
            productBarCode =productBarCode.Trim();
            if(string.IsNullOrEmpty(productID)){
                return !dbContext.Set<ProductMeasurements>().Any(a=>a.BarCode == productBarCode);
            }
            else{
                return !dbContext.Set<ProductMeasurements>().Any(a=>a.BarCode == productBarCode && a.ProductID == productID);
            }
            
        }
    

        public async Task<string> GetOldImage(string productId)
        {
          var product = await dbContext.Set<Product>().AsNoTracking().FirstOrDefaultAsync(a =>a.ID ==productId);
            return product.ImageURL;
        }

        public async Task<int> GetProductNumber()
        {
         int? number =  await this.dbContext.Set<Product>().MaxAsync(x => (int?)x.ProductNumber);
           if(number == null){
               return await Task.FromResult(1);
           }
           else{
               return await Task.FromResult( number.Value +1);
           }
        }
    }
}