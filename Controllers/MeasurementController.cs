using System.Collections.Generic;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using RealApplication.DTO;
using RealApplication.MeasurementDTO;
using RealApplication.Models;
using RealApplication.Repository.UnitOfWork;

namespace RealApplication.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MeasurementController:ControllerBase
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly IMapper mapper;

        public MeasurementController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            this.unitOfWork = unitOfWork;
            this.mapper = mapper;
        }
        [HttpGet]
        public IActionResult Get([FromQuery] int pageSize, [FromQuery] int start, [FromQuery] string search){
                search = search == null ? "" :search.ToLower();
            var model = new DataTableDTO<SelectMeasurementDTO>()
            {
                Data = mapper.Map<IEnumerable<SelectMeasurementDTO>>(unitOfWork.Measurement.GetEntityDataTable(start, pageSize, async=> async.Name.ToLower().Contains(search) && async.IsDeleted == false, async => async.ID) )  ,
                TotalCount = unitOfWork.Measurement.GetCount(async => async.Name.Contains(""))
            };
            return Ok(model);
            
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
        
    }
}