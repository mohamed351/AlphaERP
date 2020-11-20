using AutoMapper;
using RealApplication.DTO.CustomersDTOS;
using RealApplication.Models;

namespace RealApplication.Mapper
{
  
    
    public class CustomerProfiler:Profile
    {
       public CustomerProfiler()
       {
          this.CreateMap<Customer,CustomerDTO>()
          .ForMember(async=>async.ID, async=>async.MapFrom(async=>async.ID))
           .ForMember(a=>a.CustomerName,async=>async.MapFrom(async=>async.CustomerName));
           
               this.CreateMap<Customer,CustomerDTO>()
          .ForMember(async=>async.ID, async=>async.MapFrom(async=>async.ID))
           .ForMember(a=>a.CustomerName,async=>async.MapFrom(async=>async.CustomerName))
           .ReverseMap();
           
           
       }
    }
}