using AutoMapper;
using RealApplication.DTO.StoreDTOS;
using RealApplication.Models;

namespace RealApplication.Mapper
{
    public class StoreProfiler:Profile
    {
        public StoreProfiler()
        {
          CreateMap<StoreCreateDTO,Store>()
          .ForMember(async=>async.Name, async=>async.MapFrom(async=>async.Name));

            CreateMap<Store,StoreCreateDTO>()
            .ForMember(async => async.Name , async =>async.MapFrom(async=>async.Name))
            .ForMember(async => async.ID, async =>async.MapFrom(async=>async.ID));
            
        }
    }
}