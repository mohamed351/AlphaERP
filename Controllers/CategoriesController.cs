using AutoMapper;
using Microsoft.AspNet.OData;
using Microsoft.AspNetCore.Mvc;
using RealApplication.DTO.CategoriesDTOS;
using RealApplication.Models;
using RealApplication.Repository.UnitOfWork;
using System.Collections.Generic;

namespace RealApplication.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoriesController :ControllerBase
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly IMapper mapper;

        public CategoriesController(IUnitOfWork unitOfWork , IMapper mapper)
        {
            this.unitOfWork = unitOfWork;
            this.mapper = mapper;
            
            
        }
        [HttpGet]
        [EnableQuery()]
        public IActionResult GetAllCategories(){

               
            return Ok(this.unitOfWork.Categories.GetCategories());
        }
        [HttpGet(template:"/api/[controller]/flat")]
        public IActionResult GetFlatCategories(){
            return Ok(this.mapper.Map<IEnumerable<CategoryInfoDTO>>(unitOfWork.Categories.GetAll()));
        }
        [HttpGet(template:"{ID}")]
        public IActionResult GetByID(string ID){
            if(ID == null){
                return BadRequest("The ID is not exist");
            }
           var category = unitOfWork.Categories.GetByID(ID);
            if(category == null){
                return NotFound("The Category is not found");
            }
           var categoryInfoDto =  this.mapper.Map<CategoryInfoDTO>(category);
            return Ok(categoryInfoDto);
        }
        public IActionResult Post(CategoryInfoDTO categoryInfoDTO){
            if(!ModelState.IsValid){
                return BadRequest("The Category Data is not valid");
            
            }
            var category = this.mapper.Map<Category>(categoryInfoDTO);
            this.unitOfWork.Categories.Add(category);
            this.unitOfWork.Complete();

            return Ok(this.mapper.Map<CategoryInfoDTO>(category));

        }
        [HttpPut(template:"{ID}")]
        public IActionResult Put(string ID, CategoryInfoDTO  infoDTO){
            if(ID == null || !ModelState.IsValid){
                
                return BadRequest("The Request is not valid");
            }
            
           var category =  this.mapper.Map<Category>(infoDTO);
           category.ID = ID;
           unitOfWork.Categories.Edit(category);
           unitOfWork.Complete();
           return Ok(category);
        }
        [HttpDelete(template:"{ID}")]
        public IActionResult Delete(string ID){
            if(ID == null){
                return BadRequest();
            }
           var category =  this.unitOfWork.Categories.GetByID(ID);
           if(category == null){
               return NotFound();
           }
           return Ok();

        }

        
    }
}