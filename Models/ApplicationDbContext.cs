using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace RealApplication.Models
{
    public class ApplicationDbContext:IdentityDbContext<Employee>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            :base(options)
        {

        }


        public DbSet<Employee> Employees { get; set; }
        public DbSet<Supplier> Suppliers { get; set; }
        public DbSet<SupplierPhone> SupplierPhones { get; set; }
        public DbSet<SupplierAddress> SupplierAddresses { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<CustomerPhone> Phones { get; set; }
        public DbSet<CustomerAddress> Addresses { get; set; }
        public DbSet<Product> Products { get; set; }
       
        public DbSet<Category> Categories { get; set; }

        public DbSet<Measurement> Measurements {get;set;}

    }
}