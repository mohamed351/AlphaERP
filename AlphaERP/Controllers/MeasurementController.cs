using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Microsoft.AspNet.OData;
using Microsoft.AspNetCore.Mvc;
using RealApplication.DTO;
using RealApplication.MeasurementDTO;
using RealApplication.Models;
using RealApplication.Models.Enum;
using RealApplication.Repository.UnitOfWork;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace RealApplication.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MeasurementController:ControllerBase
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly IMapper mapper;
        private readonly ApplicationDbContext context;

        public MeasurementController(IUnitOfWork unitOfWork, IMapper mapper , ApplicationDbContext context)
        {
            this.unitOfWork = unitOfWork;
            this.mapper = mapper;
            this.context = context;
        }
        [HttpGet(template:"/api/[controller]/barCodes")]
        public IActionResult GetBarCodes([FromQuery]string barCode){
         barCode=  barCode == null ?"" :barCode; 
            return Ok(this.context
            .ProductMeasurements.Include(a=>a.Product)
            .Where(a=>a.BarCode.Contains(barCode)).Skip(0).Take(5)
            .Select(a=> new {ProductName=a.Product.ProductName, ID =a.ProductID , BarCode =a.BarCode}));
        }

       [HttpGet(template:"/api/[controller]/barCodes/{productID}")]
        public IActionResult GetBarCodesByName(string productID){
           var query =  this.context.Products.Include(a=>a.ProductMeasurements).FirstOrDefault(a=>a.ID == productID);
            return Ok(new  {ProductName=query.ProductName, ID =query.ID , BarCode =query.ProductMeasurements.Select(a=>a.BarCode).ToList()});
        }
        [HttpGet]
        public IActionResult Get([FromQuery] int pageSize, [FromQuery] int start, [FromQuery] string search){
                search = search == null ? "" :search.ToLower();
            var model = new DataTableDTO<SelectMeasurementDTO>()
            {
                Data = mapper.Map<IEnumerable<SelectMeasurementDTO>>(unitOfWork.Measurement.GetEntityDataTable(start, pageSize, async=> async.Name.ToLower().Contains(search) && async.IsDeleted == false && async.IsKnown ==false, async => async.ID) )  ,
                TotalCount = unitOfWork.Measurement.GetCount(async => async.Name.Contains(""))
            };
            return Ok(model);
            
        }

        [EnableQuery()]
        [HttpGet(template: "DataO")]
        public IActionResult GetAll()
        {
            return Ok(this.unitOfWork.Measurement.GetIQueryableData());
        }

        [HttpPost]
        public IActionResult Post(CreateMeasurementDTO dto){
            if(!ModelState.IsValid){
                return BadRequest("The Data is not valid");
            }
             var measurement = this.mapper.Map<Measurement>(dto);
              this.unitOfWork.Measurement.Add(measurement);
              this.unitOfWork.Complete();
        
            return Ok(this.mapper.Map<CreateMeasurementDTO>(measurement));
        }
        [HttpPut(template:"{ID}")]
        public IActionResult Put (int? ID,EditMeasurementDTO dto){
            if(!ModelState.IsValid || ID == null){
                return BadRequest("The Data is not valid");
            }
           var measurement = this.mapper.Map<Measurement>(dto);
           measurement.ID = ID.Value;
           this.unitOfWork.Measurement.Edit(measurement);
           this.unitOfWork.Complete();
            return Ok(this.mapper.Map<EditMeasurementDTO>(measurement));
        }
         [HttpDelete(template:"{ID}")]
        public IActionResult Delete(int? ID){
            if(ID == null){
                return BadRequest("The ID is not Valid");
            
            }
               var measurement =  this.unitOfWork.Measurement.GetByID(ID.Value);
               measurement.IsDeleted = true;
               this.unitOfWork.Complete();

            return Ok(measurement);
        }
        [HttpGet(),Route(template:"/Product/Measurement/")]
        public IActionResult GetMesurementByType([FromQuery]TypeOfMeasurements  type){
           var measurement = unitOfWork.Measurement.GetByCondititon(async=>async.MainType == type);
            return Ok(measurement);
        }
        [HttpGet("/api/[controller]/GetMainType/{ID}")]
        public async  Task<IActionResult> GetMainType(int ID){
           var result = await this.unitOfWork.Measurement.GetTypeOfMeasurement(ID);
            return Ok(new { measurementText = result});
        }

        [HttpGet(), Route(template: "/Product/MainTypeOnly/")]
        public IActionResult GetMesurementByMainTypeOnly([FromQuery] TypeOfMeasurements type)
        {
            var measurement = unitOfWork.Measurement.GetByCondititon(async => async.MainType == type)
                .FirstOrDefault(a=>a.IsMain == true);
            return Ok(measurement);
        }








    }
}