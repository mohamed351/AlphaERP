using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RealApplication.Models;
using System.Linq;

namespace RealApplication.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SupplymentInvoiceController:ControllerBase
    {
        private readonly ApplicationDbContext applicationDbContext;

        public SupplymentInvoiceController(ApplicationDbContext applicationDbContext)
        {
            this.applicationDbContext = applicationDbContext;
        }
        [HttpGet]
        public IActionResult Get(){
          return Ok();
        }
        [HttpGet(template:"/api/[controller]/GetByBarCode/{barcode}")]
        public IActionResult GetProductsByMainBarCode(string barcode)
        {
            var query = applicationDbContext.ProductMeasurements
                  .Include(a => a.Product)
                  .Include(a => a.Measurement)
                  .Where(a => a.Product.BarCode.Contains(barcode) && a.Measurement.IsMain == true)
                  .Select(a => new { a.ProductID , a.Product.ProductName, a.MeasurementID, a.Value, a.Measurement.Name, a.Product.BarCode });
                


            return Ok(query);
        }
        [HttpGet(template: "/api/[controller]/GetByProductName/{productName}")]
        public IActionResult GetProductByName(string productName)
        {

            var query = applicationDbContext.ProductMeasurements
          .Include(a => a.Product)
          .Include(a => a.Measurement)
          .Where(a => a.Product.ProductName.Contains(productName) && a.Measurement.IsMain == true)
          .Select(a => new {a.ProductID , a.Product.ProductName, a.Value, a.MeasurementID, a.Measurement.Name, a.Product.BarCode });


            return Ok(query);
        }

        
        
    }
}