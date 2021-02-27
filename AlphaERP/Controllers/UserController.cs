using Microsoft.AspNetCore.Mvc;

namespace RealApplication.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController:ControllerBase
    {
        public IActionResult Get(){
            return Ok();
        }

        
    }

}