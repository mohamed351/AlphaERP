using System;
using RealApplication.Repository.interfaces;

namespace RealApplication.Repository.UnitOfWork
{
    public interface IUnitOfWork:IDisposable
    {
        public ISupplierRepository Suppliers { get; }
        public ICustomerRepository Customers { get; }
        public ICategoryRepository Categories { get; }
        int Complete();
    }
}