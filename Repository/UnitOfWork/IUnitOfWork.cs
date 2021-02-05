using System;
using RealApplication.Repository.interfaces;

namespace RealApplication.Repository.UnitOfWork
{
    public interface IUnitOfWork:IDisposable
    {
        public ISupplierRepository Suppliers { get; }
        public ICustomerRepository Customers { get; }
        public ICategoryRepository Categories { get; }

        public IProductRepository Products {get;}

        public IStoreRepository Stores {get;}

        public IMeasurementRepository Measurement{get;}

        public ISupplymentInvoiceRepository SupplierInvoice { get; }
        int Complete();
    }
}