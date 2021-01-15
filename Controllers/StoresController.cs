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
        [HttpPut(template:"{id}")]
        public IActionResult PutStore(int? id,[FromBody] StoreCreateDTO dto){
            if(!ModelState.IsValid){
               return BadRequest("The Data is not valid");
            }
             if(id == null){
                 return BadRequest("The ID is not Exist");
             }
             var store = this.mapper.Map<Store>(dto);
             store.ID = id.Value;
             this.unitOfWork.Stores.Edit(store);
             this.unitOfWork.Complete();
             return Ok(this.mapper.Map<StoreCreateDTO>(store));
        }
        [HttpDelete(template:"id")]
        public IActionResult DeleteStore(int? id){
            if(id == null){
                return BadRequest("The ID is not Valid");
            }
           var store = this.unitOfWork.Stores.GetByID(id.Value);
           store.IsDelete = true;
           this.unitOfWork.Complete();
           return Ok(store);
        }

        [HttpGet(template:"/api/[controller]/Verify/{storeName}")]
        public IActionResult VerifyStoreName(string storeName,[FromQuery] int? storeID){
            storeName = storeName.Trim();
            if(storeID == null){
            return Ok(!this.unitOfWork.Stores.ValueExist(a=> a.Name == storeName ));
            }
            else{
                return Ok(!this.unitOfWork.Stores.ValueExist(a=> a.Name == storeName && a.ID !=storeID ));
            }
        }





       
        
    }
}