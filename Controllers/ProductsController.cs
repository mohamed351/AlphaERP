using System.Collections.Generic;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using RealApplication.DTO;
using RealApplication.DTO.ProductDTOS;
using RealApplication.Repository.UnitOfWork;

namespace RealApplication.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly IMapper mapper;
        public ProductsController(IUnitOfWork unit, IMapper mapper)
        {
            this.mapper = mapper;
            this.unitOfWork = unit;

        }
        [HttpGet]
        public IActionResult Get([FromQuery] int pageSize, [FromQuery] int start, [FromQuery] string search)
        {
            search = search == null ? "" : search.ToLower();
            var model = new DataTableDTO<ProductsDTO>()
            {
                Data = mapper.Map<IEnumerable<ProductsDTO>>(unitOfWork.Customers.GetEntityDataTable(start, pageSize, async => async.CustomerName.ToLower().Contains(search) && async.IsDeleted == false, async => async.CustomerName)),
                TotalCount = unitOfWork.Customers.GetCount(async => async.CustomerName.Contains(""))
            };
            return Ok(model);
        }
    }
}