using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RealApplication.Models;
using RealApplication.Repository.interfaces;

namespace RealApplication.Repository.Implementation
{
    public class SupplierRepository : Repository<Supplier, string>, ISupplierRepository
    {
        private readonly DbContext dbContext;

        public SupplierRepository(DbContext dbContext) : base(dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task EditSupplierWithPhonesAndAddress(string ID, Supplier supplier)
        {
           Supplier supplierOldData =  await this.dbContext.Set<Supplier>()
           .Include(async=>async.Phones)
           .Include(async=> async.SupplierAddresses).FirstOrDefaultAsync(async=>async.ID == ID);

            supplierOldData.Name = supplier.Name;
            supplierOldData.Phones.Clear();
            supplierOldData.SupplierAddresses.Clear();
            supplier.Phones.Each(action=>  supplierOldData.Phones.Add(new SupplierPhone() {Phone = action.Phone}));
            supplier.SupplierAddresses.Each(action=>  supplierOldData.SupplierAddresses.Add(new SupplierAddress() {Address = action.Address}));
            await this.dbContext.SaveChangesAsync();

        }

        public async Task<Supplier> GetSupplierByID(string ID)
        {
           return await dbContext.Set<Supplier>().Include(a=>a.SupplierAddresses)
           .Include(async=>async.Phones).FirstOrDefaultAsync(async=>async.ID == ID);
        }
    }
}