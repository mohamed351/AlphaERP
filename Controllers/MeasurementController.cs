using System.Collections.Generic;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using RealApplication.DTO;
using RealApplication.MeasurementDTO;
using RealApplication.Repository.UnitOfWork;

namespace RealApplication.Controllers
{
    public class MeasurementController:ControllerBase
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly IMapper mapper;

        public MeasurementController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            this.unitOfWork = unitOfWork;
            this.mapper = mapper;
        }
        public IActionResult Get([FromQuery] int pageSize, [FromQuery] int start, [FromQuery] string search){
                search = search == null ? "" :search.ToLower();
            var model = new DataTableDTO<EditMeasurementDTO>()
            {
                Data = mapper.Map<IEnumerable<EditMeasurementDTO>>(unitOfWork.Customers.GetEntityDataTable(start, pageSize, async => async.CustomerName.ToLower().Contains(search) &&async.IsDeleted == false, async => async.CustomerName) )  ,
                TotalCount = unitOfWork.Customers.GetCount(async => async.CustomerName.Contains(""))
            };
            return Ok(model);
            
        }
        public IActionResult Post(CreateMeasurementDTO dto){
            return Ok();
        }
        public IActionResult Put (EditMeasurementDTO dto){
            return Ok();
        }
        public IActionResult Delete(int? id){
            return Ok();
        }
        
    }
}