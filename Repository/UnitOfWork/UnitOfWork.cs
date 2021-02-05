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
            this.Measurement = new MeasurementRepository(context);
            this.Stores = new StoreRepository(context);
            this.SupplierInvoice = new SupplymentInvoiceRepository(context);
           
        }
        public ISupplierRepository Suppliers { get; }
        public ICustomerRepository Customers { get; }
        public ICategoryRepository Categories { get; }

        public IProductRepository Products {get;}

        public IMeasurementRepository Measurement {get;}

        public IStoreRepository Stores {get;}

        public ISupplymentInvoiceRepository SupplierInvoice { get; }

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