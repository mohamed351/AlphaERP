using AutoMapper;
using Microsoft.AspNet.OData;
using Microsoft.AspNetCore.Mvc;
using RealApplication.DTO.StoreDTOS;
using RealApplication.Models;
using RealApplication.Repository.UnitOfWork;
using System.Collections.Generic;
using System.Linq;

namespace RealApplication.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StoresController:ControllerBase
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly IMapper mapper;
        private readonly ApplicationDbContext dbContext;

        public StoresController(IUnitOfWork unitOfWork,IMapper mapper ,  ApplicationDbContext dbContext)
        {
            this.unitOfWork = unitOfWork;
            this.mapper = mapper;
            this.dbContext = dbContext;
        }
        [HttpGet]
        [EnableQuery()]
        public IEnumerable<Store> GetStores(){
            return this.unitOfWork.Stores.GetAll();         
        }

        [HttpPost]
        public IActionResult PostStore(StoreCreateDTO dTO){
            if(!ModelState.IsValid){
                return BadRequest("The Store is not valid");
            }
            var store= this.mapper.Map<Store>(dTO);
             this.unitOfWork.Stores.Add(store);
             this.unitOfWork.Complete();
             return Ok(this.mapper.Map<StoreCreateDTO>(store));

        }


       
        
    }
}