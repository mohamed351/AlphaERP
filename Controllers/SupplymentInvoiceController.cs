using Microsoft.AspNetCore.Mvc;

namespace RealApplication.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SupplymentInvoiceController:ControllerBase
    {
        [HttpGet]
        public IActionResult Get(){
          return Ok();
        }
        
        
    }
}