using Microsoft.EntityFrameworkCore;
using RealApplication.Models;
using RealApplication.Repository.interfaces;

namespace RealApplication.Repository.Implementation
{
    public class StoreRepository : Repository<Store, int>, IStoreRepository
    {
        public StoreRepository(DbContext dbContext) 
        : base(dbContext)
        {
        }
    }
}