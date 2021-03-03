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
    [Route("api/[controller]")]
    [ApiController]
    public class ReportsController : ControllerBase
    {
        private readonly IConfiguration configuration;
        private readonly IWebHostEnvironment webHostEnvironment;

        public ReportsController(IConfiguration configuration , IWebHostEnvironment webHostEnvironment)
        {
            System.Text.Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);
            this.configuration = configuration;
            this.webHostEnvironment = webHostEnvironment;
        }
        [HttpGet("/api/[controller]/StoreMovement")]
        public IActionResult CustomerInvoiceReport()
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
                var result = report.Execute(RenderType.Pdf, 1, null, "");
                return File(result.MainStream, "application/pdf");
            }

        }
    }
}
