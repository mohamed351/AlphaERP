using RealApplication.Repository.interfaces;
using RealApplication.Repository.Implementation;
using RealApplication.Models;
using Microsoft.EntityFrameworkCore;

namespace RealApplication.Repository.Implementation
{
    public class ProductRepository : Repository<Product, string>, IProductRepository
    {
        private readonly DbContext dbContext;
        public ProductRepository(DbContext dbContext) : base(dbContext)
        {
            this.dbContext = dbContext;

        }

        
    }
}