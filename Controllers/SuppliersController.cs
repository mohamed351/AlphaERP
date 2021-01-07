using Microsoft.AspNetCore.Mvc;
using RealApplication.DTO;
using AutoMapper;
using RealApplication.Repository.UnitOfWork;
using RealApplication.DTO.SuppliersDTOS;
using System.Collections.Generic;
using RealApplication.Models;
using System.Threading.Tasks;
using System;
using Microsoft.AspNet.OData;

namespace RealApplication.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SupplierController : ControllerBase
    {
        private readonly IMapper mapper;
        private readonly IUnitOfWork unitOfWork;

        public SupplierController(IMapper mapper, IUnitOfWork unitOfWork)
        {
            this.mapper = mapper;
            this.unitOfWork = unitOfWork;

           

        }
        [EnableQuery()]
        [HttpGet(template:"/api/[controller]/flat")]
        public  IEnumerable<Supplier> GetODataSupplier(){
            return unitOfWork.Suppliers.GetAll();
        }
        
        [HttpGet]
        public IActionResult Get([FromQuery] int pageSize, [FromQuery] int start ,[FromQuery]string search ="")
        {
            search  = search == null ? "" :search.ToLower();
            var model = new DataTableDTO<SupplierDTO>()
            {
                Data = mapper.Map<IEnumerable<SupplierDTO>>
                (unitOfWork.Suppliers.GetEntityDataTable(start,
                 pageSize, 
                 async => async.Name.ToLower().Contains(search) && async.IsDeleted == false
                 , async => async.Name)),
                TotalCount = unitOfWork.Suppliers.GetCount(async => async.Name.Contains(search) & async.IsDeleted == false)
            };
            return Ok(model);
        }
        [HttpPost]
         public IActionResult Post([FromBody]SupplierCreateDTO supplierCreateDTO){
             if(!ModelState.IsValid){
                 return BadRequest("The supplier data is not valid");
             }
           var supplier =  this.mapper.Map<Supplier>(supplierCreateDTO);
             unitOfWork.Suppliers.Add(supplier);
             unitOfWork.Complete();
            var supplierDTO = this.mapper.Map<SupplierCreateDTO>(supplier);
            return  Ok(supplierCreateDTO);
             
        }
        [HttpGet(template:"{ID}")]
         public  async Task<IActionResult> GetByID(string ID){
             if(ID == null)
             return BadRequest();
             var supplier = await unitOfWork.Suppliers.GetSupplierByID(ID);
             if(supplier == null)
             return NotFound("Supplier is not Found");
        
            return Ok(this.mapper.Map<Supplier,SupplierCreateDTO>(supplier));

         }

        [HttpPut(template:"{ID}")]
        public async Task<IActionResult> Put(string ID,SupplierCreateDTO editDTO ){
            if(ID == null)
             return BadRequest("The ID is not Exist");
       
            
          var supplierChange = this.mapper.Map<Supplier>(editDTO);   
             supplierChange.ID = ID; 
            await this.unitOfWork.Suppliers.EditSupplierWithPhonesAndAddress(ID,supplierChange);
           this.unitOfWork.Complete();
           
           return Ok(this.mapper.Map<SupplierCreateDTO>(supplierChange));
           
        }
        [HttpDelete(template:"{ID}")]
        public IActionResult Delete(string ID){
            if(ID == null)
            return BadRequest("The ID is not Exist");

            var supplier = this.unitOfWork.Suppliers.GetByID(ID);
            supplier.IsDeleted = true;
            this.unitOfWork.Complete();
            return Ok(supplier);

       

        }


    }
}