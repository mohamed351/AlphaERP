using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace RealApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReturnSupplymentInvoiceController : ControllerBase
    {
        public IActionResult Get()
        {
            return Ok();
        }
        public IActionResult Post()
        {


            return Ok();
        }

    }
}
