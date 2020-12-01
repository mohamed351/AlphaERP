using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using RealApplication.DTO;
using RealApplication.DTO.ProductDTOS;
using RealApplication.Models;
using RealApplication.Repository.UnitOfWork;
using System.Reflection;

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
                Data = mapper.Map<IEnumerable<ProductsDTO>>(unitOfWork.Products.GetEntityDataTable(start, pageSize, async => async.ProductName.ToLower().Contains(search) && async.IsDeleted == false, async => async.ProductName)),
                TotalCount = unitOfWork.Products.GetCount(a=>a.IsDeleted == false)
            };
            return Ok(model);
        }
        [HttpGet(template:"/api/[controller]/number")]
        public async  Task<IActionResult> GetProductNumber(){
            return Ok(await this.unitOfWork.Products.GetProductNumber());   
        }
        [HttpGet(template:"/api/[controller]/Properties")]
       
        [HttpPost]
        public async Task<IActionResult> Post(ProductsDTO productsDTO){
        if(!ModelState.IsValid)
        return BadRequest("The Product is not valid");

          var product = this.mapper.Map<Product>(productsDTO);
          product.ProductNumber = await this.unitOfWork.Products.GetProductNumber();
          return Ok(this.mapper.Map<ProductsDTO>(product));
        }

        /*
        private string  proccessImage(string imagebase64){
          if(imagebase64 == null)
           return HttpContext.Request
            return imagebase64;
        }
        */
    

    }
}