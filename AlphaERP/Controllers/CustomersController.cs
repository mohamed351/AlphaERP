
using System.Linq;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using RealApplication.DTO;
using RealApplication.DTO.CustomersDTOS;
using RealApplication.Models;
using RealApplication.Repository.UnitOfWork;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNet.OData;

namespace RealApplication.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CustomersController : ControllerBase
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly IMapper mapper;
    
        public CustomersController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            this.mapper = mapper;
            this.unitOfWork = unitOfWork;
        }

        [EnableQuery()]
        [HttpGet("dataO")]
        public IQueryable GetCustomerOData()
        {
            return unitOfWork.Customers.GetIQueryableData();
        }
    
        [HttpGet]
        public IActionResult Get([FromQuery] int pageSize, [FromQuery] int start, [FromQuery] string search)
        {
            search = search == null ? "" :search.ToLower();
            var model = new DataTableDTO<CustomerDTO>()
            {
                Data = mapper.Map<IEnumerable<CustomerDTO>>(unitOfWork.Customers.GetEntityDataTable(start, pageSize, async => async.CustomerName.ToLower().Contains(search) &&async.IsDeleted == false, async => async.CustomerName) )  ,
                TotalCount = unitOfWork.Customers.GetCount(async => async.CustomerName.ToLower().Contains(search)  && async.IsDeleted == false)
            };
            return Ok(model);
        }

        [HttpGet(template:"{ID}")]
        public async  Task<IActionResult> GetByID(string ID){
            if(ID == null){
                return BadRequest("The ID of customer doesn't exist");
            }
            var customer = await this.unitOfWork.Customers.GetAllCustomerData(ID);
            if(customer == null){
                return NotFound("The customer is not found");
            }
            var customerDto =   this.mapper.Map<CustomerCreateDTO>(customer);
            return Ok(customerDto);
            
        }

        [HttpPost]
        public IActionResult Post(CustomerCreateDTO customerCreate){
            if(!ModelState.IsValid){
                return BadRequest("The Customer Data is not Valid");
            }
           var customer =  this.mapper.Map<CustomerCreateDTO,Customer>(customerCreate);
            this.unitOfWork.Customers.Add(customer);
            this.unitOfWork.Complete();
            var customerDTO = this.mapper.Map<CustomerCreateDTO>(customer);
            return  Ok(customerDTO);
        }

        [HttpPut(template:"{ID}")]
        public async Task< IActionResult> Put(string ID , CustomerCreateDTO customerCreateDTO){
            if(!ModelState.IsValid){
                return BadRequest("The Customer Data is not Valid");

            }
            var customer = this.mapper.Map<Customer>(customerCreateDTO);
            customer.ID = ID;
           await this.unitOfWork.Customers.EditCustomerWithTheirPhonesAndAddrss(ID,customer);
            this.unitOfWork.Complete();
            this.mapper.Map<CustomerCreateDTO>(customer);
            return Ok(customer);
        }

        [HttpDelete(template:"{ID}")]
        public IActionResult Delete(string ID){
            if(ID == null){
                return BadRequest("The ID doesn't exist");
            }
          var customer =   unitOfWork.Customers.GetByID(ID);
          if(customer == null){
              return NotFound("The customer is not found");
          }
          customer.IsDeleted = true;
          this.unitOfWork.Complete();
          return Ok(this.mapper.Map<CustomerCreateDTO>(customer));

        }


    }
}