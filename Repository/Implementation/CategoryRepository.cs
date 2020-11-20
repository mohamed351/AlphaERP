using Microsoft.EntityFrameworkCore;
using RealApplication.Models;
using RealApplication.Repository.interfaces;

namespace RealApplication.Repository.Implementation
{
    public class CategoryRepository : Repository<Category, string>, ICategoryRepository
    {
        public CategoryRepository(DbContext dbContext) 
        : base(dbContext)
        {
        }
    }
}