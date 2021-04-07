using AspNetCore.Reporting;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RealApplication.Controllers
{
   
    public class ReportsController : Controller
    {
        private readonly IConfiguration configuration;
        private readonly IWebHostEnvironment webHostEnvironment;

        public ReportsController(IConfiguration configuration ,
            IWebHostEnvironment webHostEnvironment)
        {
            
            this.configuration = configuration;
            this.webHostEnvironment = webHostEnvironment;
            System.Text.Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);


        }
        
        public IActionResult StoreReport()
        {
            using (SqlConnection connection = new SqlConnection(configuration.GetConnectionString("con")))
            {
                connection.Open();
                SqlCommand sqlCommand = new SqlCommand("sp_storeReport", connection);
                sqlCommand.CommandType = System.Data.CommandType.StoredProcedure;
                SqlDataReader reader = sqlCommand.ExecuteReader();
                DataTable table = new DataTable();
                table.Load(reader);
                LocalReport report = new LocalReport($"{this.webHostEnvironment.WebRootPath}//reports//StoreMovement.rdlc");
                report.AddDataSource("DataSet1", table);
                var result = report.Execute(RenderType.Pdf);
                return File(result.MainStream, "application/pdf");
            }

        }
     
        public IActionResult PurchasingReport(int ID)
        {

            using (SqlConnection connection = new SqlConnection(configuration.GetConnectionString("con")))
            {
                connection.Open();
                SqlCommand sqlCommand = new SqlCommand("sp_supplier_invoice", connection);
                sqlCommand.CommandType = System.Data.CommandType.StoredProcedure;
                sqlCommand.Parameters.Add(new SqlParameter("@InvoiceNumber ", ID));
                SqlDataReader reader = sqlCommand.ExecuteReader();
                DataTable table = new DataTable();
                table.Load(reader);
                LocalReport report = new LocalReport($"{this.webHostEnvironment.WebRootPath}//reports//purchasingInvoice.rdlc");
                  
                report.AddDataSource("DataSet1", table);
             
              

                var result = report.Execute(RenderType.Pdf);
                return File(result.MainStream, "application/pdf");

            }


        }


   
        public IActionResult CustomerInvoiceReport(int ID)
        {
            using (SqlConnection connection = new SqlConnection(configuration.GetConnectionString("con")))
            {
                connection.Open();
                SqlCommand sqlCommand = new SqlCommand("sp_customer_invoice", connection);
                sqlCommand.CommandType = System.Data.CommandType.StoredProcedure;
                sqlCommand.Parameters.Add(new SqlParameter("@InvoiceID", ID));
                SqlDataReader reader = sqlCommand.ExecuteReader();
                DataTable table = new DataTable();
                table.Load(reader);

                LocalReport report = new LocalReport($"{this.webHostEnvironment.WebRootPath}//reports//sellingInvoice.rdlc");
                report.AddDataSource("DataSet1", table);
               
               
                var result = report.Execute(RenderType.Pdf);
            
                return File(result.MainStream, "application/pdf");
            }

        }
        protected override void Dispose(bool disposing)
        {
            GC.Collect();
            base.Dispose(disposing);



        }

    }
}
