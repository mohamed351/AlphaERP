
using System.Linq;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using RealApplication.DTO;
using RealApplication.DTO.CustomersDTOS;
using RealApplication.Models;
using RealApplication.Repository.UnitOfWork;
using System.Collections.Generic;

namespace RealApplication.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CustomersController : ControllerBase
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly IMapper mapper;
    
        public CustomersController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            this.mapper = mapper;
            this.unitOfWork = unitOfWork;
        }
    
        [HttpGet]
        public IActionResult Get([FromQuery] int pageSize, [FromQuery] int start)
        {
            var model = new DataTableDTO<CustomerDTO>()
            {
                Data = mapper.Map<IEnumerable<CustomerDTO>>(unitOfWork.Customers.GetEntityDataTable(start, pageSize, async => async.CustomerName.Contains(""), async => async.CustomerName)),
                TotalCount = unitOfWork.Customers.GetCount(async => async.CustomerName.Contains(""))
            };
            return Ok(model);
        }
        public IActionResult Post(){
            

            return  Ok();
        }

    }
}