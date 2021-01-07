using Microsoft.AspNet.OData;
using Microsoft.AspNetCore.Mvc;
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
        private readonly ApplicationDbContext dbContext;

        public StoresController(IUnitOfWork unitOfWork, ApplicationDbContext dbContext)
        {
            this.unitOfWork = unitOfWork;
            this.dbContext = dbContext;
        }
        [HttpGet]
        [EnableQuery()]
        public IEnumerable<Store> GetStores(){
            return this.unitOfWork.Stores.GetAll();         
        }
        
    }
}