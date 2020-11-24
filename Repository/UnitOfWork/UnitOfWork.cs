using RealApplication.Models;
using RealApplication.Repository.Implementation;
using RealApplication.Repository.interfaces;

namespace RealApplication.Repository.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ApplicationDbContext context;

        public UnitOfWork(ApplicationDbContext context)
        {
            this.context = context;
            this.Suppliers = new SupplierRepository(context);
            this.Customers = new CustomerRepository(context);
            this.Categories = new CategoryRepository(context);
            this.Products = new ProductRepository(context);
        }
        public ISupplierRepository Suppliers { get; }
        public ICustomerRepository Customers { get; }
        public ICategoryRepository Categories { get; }

        public IProductRepository Products {get;}

        public int Complete()
        {
          return  context.SaveChanges();
        }

        public void Dispose()
        {
            context.Dispose();
        
        }
    }
}