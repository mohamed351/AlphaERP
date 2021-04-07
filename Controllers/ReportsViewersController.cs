using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Stimulsoft.Report;
using Stimulsoft.Report.Dictionary;
using Stimulsoft.Report.Mvc;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;


namespace RealApplication.Controllers
{
    public class ReportsViewersController : Controller
    {
        private readonly IConfiguration configuration;
        private readonly IWebHostEnvironment webHostEnvironment;

        public ReportsViewersController(IConfiguration configuration, IWebHostEnvironment webHostEnvironment )
        {
         
            Stimulsoft.Base.StiLicense.Key = "6vJhGtLLLz2GNviWmUTrhSqnOItdDwjBylQzQcAOiHkcgIvwL0jnpsDqRpWg5FI5kt2G7A0tYIcUygBh1sPs7koivWV0htru4Pn2682yhdY3+9jxMCVTKcKAjiEjgJzqXgLFCpe62hxJ7/VJZ9Hq5l39md0pyydqd5Dc1fSWhCtYqC042BVmGNkukYJQN0ufCozjA/qsNxzNMyEql26oHE6wWE77pHutroj+tKfOO1skJ52cbZklqPm8OiH/9mfU4rrkLffOhDQFnIxxhzhr2BL5pDFFCZ7axXX12y/4qzn5QLPBn1AVLo3NVrSmJB2KiwGwR4RL4RsYVxGScsYoCZbwqK2YrdbPHP0t5vOiLjBQ+Oy6F4rNtDYHn7SNMpthfkYiRoOibqDkPaX+RyCany0Z+uz8bzAg0oprJEn6qpkQ56WMEppdMJ9/CBnEbTFwn1s/9s8kYsmXCvtI4iQcz+RkUWspLcBzlmj0lJXWjTKMRZz+e9PmY11Au16wOnBU3NHvRc9T/Zk0YFh439GKd/fRwQrk8nJevYU65ENdAOqiP5po7Vnhif5FCiHRpxgF";
            this.configuration = configuration;
            this.webHostEnvironment = webHostEnvironment;
        }

        public IActionResult GetReport()
        {
            var data = (string[]) TempData["reportData"];
            ReportType type =(ReportType) Convert.ToInt32(data[0]);
            StiReport report = new StiReport();
            switch (type)
            {
          case ReportType.SellingInvoice:
           
            report.Load(this.webHostEnvironment.WebRootPath + "/SellingInvoice.mrt");
            report["@InvoiceID"] = Convert.ToInt32(data[1]);
            report.Dictionary.Databases.Add(new StiSqlDatabase("Connection", configuration.GetConnectionString("con")));
            report.Render();
                    break;
           
          case ReportType.PurchasingInvoice:
               report.Load(this.webHostEnvironment.WebRootPath + "/PurchasingInvoice.mrt");
               report["@InvoiceNumber"] = Convert.ToInt32(data[1]);
               report.Dictionary.Databases.Add(new StiSqlDatabase("Connection", configuration.GetConnectionString("con")));
               report.Render();
               break;

                default:
                    break;
                
                   
            }
            return StiNetCoreViewer.GetReportResult(this, report);

        }
        public IActionResult EventViewer()
        {
            return StiNetCoreViewer.ViewerEventResult(this);
        }
        public IActionResult Index([FromQuery] string ReportData)
        {
            string[] builder = ReportData.Split('|');
            TempData["reportData"] = builder;
            return View();
        }
        public enum ReportType
        {
          SellingInvoice  =0,
          PurchasingInvoice =1
        }

    }
}
