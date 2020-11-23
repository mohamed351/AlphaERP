using Microsoft.AspNetCore.Mvc;
using RealApplication.DTO.CategoriesDTOS;
using RealApplication.Repository.UnitOfWork;

namespace RealApplication.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoriesController :ControllerBase
    {
        private readonly IUnitOfWork unitOfWork;

        public CategoriesController(IUnitOfWork unitOfWork )
        {
            this.unitOfWork = unitOfWork;
        }
        [HttpGet]
        public IActionResult GetAllCategories(){

               
            return Ok(this.unitOfWork.Categories.GetCategories());
        }
        
    }
}