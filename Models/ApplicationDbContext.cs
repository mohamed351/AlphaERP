using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using RealApplication.Models.StoredProcedures;
using System.Collections.Generic;
using System.Linq;

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
        public DbSet<ProductMeasurements>  ProductMeasurements { get; set; }
        public DbSet<SupplymentDetail> SupplymentDetails { get; set; }
        public DbSet<SupplymentInvoice> SupplymentInvoices {get;set;}
        public DbSet<Store> Stores {get;set;}
        public DbSet<ProductStore> ProductStores {get;set;}
        public DbSet<CustomerInvoice> CustomerInvoice { get; set; }
        public DbSet<CustomerInvoiceDetails> CustomerInvoiceDetails { get; set; }
        public DbSet<ReturnedCustomerInvoice> ReturnedCustomerInvoices { get; set; }
        public DbSet<ReturnedCustomerInvoiceDetails> ReturnedCustomerInvoiceDetails { get; set; }
        public DbSet<ReturnSupplymentInvoice> ReturnSupplymentInvoices { get; set; }
        public DbSet<ReturnSupplymentInvoiceDetails> ReturnSupplymentInvoiceDetails { get; set; }

        [System.Obsolete]
        public DbQuery<StoredProcedures.Sp_SupplierInvoice> Sp_SupplierInvoices { get; set; }



        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<ProductMeasurements>()
            .HasKey( c => new {c.MeasurementID, c.ProductID});

            builder.Entity<ProductStore>()
            .HasKey(c =>  new {c.ProductID , c.StoreID, c.ProductEnteredIn});
            // Change requirements
            //builder.Entity<ReturnedCustomerInvoice>()
            //    .HasIndex(a => a.InvoiceReferenceID)
            //    .IsUnique();

            //builder.Entity<ReturnSupplymentInvoice>()
            //    .HasIndex(a => a.InvoiceReferenceID)
            //    .IsUnique();


            base.OnModelCreating(builder);
        }

        public List<Sp_SupplierInvoice> GetSupplierInvoices(int InvoiceNumber)
        {
            SqlParameter sqlParameter = new SqlParameter("@InvoiceNumber", InvoiceNumber); 
          return  Sp_SupplierInvoices.FromSqlRaw("execute [sp_supplier_invoice] @InvoiceNumber", sqlParameter).ToList();
        
        }

    }
}