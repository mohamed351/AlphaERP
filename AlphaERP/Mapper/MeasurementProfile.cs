using AutoMapper;
using RealApplication.MeasurementDTO;
using RealApplication.Models;

namespace RealApplication.Mapper
{
  
    public class MeasurementProfiler:Profile{

        public MeasurementProfiler()
        {
            CreateMap<Measurement, CreateMeasurementDTO>()
            .ForMember(a => a.Name, async => async.MapFrom(async => async.Name))
            .ForMember(async => async.MainType, async => async.MapFrom(async => async.MainType))
            .ForMember(async => async.Value, async => async.MapFrom(async => async.defaultValue));

            CreateMap<Measurement, CreateMeasurementDTO>()
            .ForMember(a => a.Name, async => async.MapFrom(async => async.Name))
            .ForMember(async => async.MainType, async => async.MapFrom(async => async.MainType))
            .ForMember(async => async.Value, async => async.MapFrom(async => async.defaultValue))
            .ReverseMap();

               
            CreateMap<Measurement,EditMeasurementDTO>()
            .ForMember(a=>a.ID, async=>async.MapFrom(async=>async.ID))
            .ForMember(a=>a.Name , async=> async.MapFrom(async=>async.Name))
            .ForMember(a=>a.Value, a=>a.MapFrom(a=>a.Name))
            .ForMember(async=> async.MainType, async=> async.MapFrom(async=>async.MainType)).ReverseMap();

                           
            CreateMap<Measurement,EditMeasurementDTO>()
            .ForMember(a=>a.ID, async=>async.MapFrom(async=>async.ID))
            .ForMember(a=>a.Name , async=> async.MapFrom(async=>async.Name))
            .ForMember(a=> a.Value,a=>a.MapFrom(a=>a.defaultValue))
            .ForMember(async=> async.MainType, async=> async.MapFrom(async=>async.MainType));



             CreateMap<Measurement,SelectMeasurementDTO>()
            .ForMember(a=>a.ID, async=>async.MapFrom(async=>async.ID))
            .ForMember(a=>a.Name , async=> async.MapFrom(async=>async.Name))
            .ForMember(a=>a.Value , async=> async.MapFrom(async => async.defaultValue))
            .ForMember(async=> async.MainType, async=> async.MapFrom(async=>async.MainType));


             CreateMap<Measurement,SelectMeasurementDTO>()
            .ForMember(a=>a.ID, async=>async.MapFrom(async=>async.ID))
            .ForMember(a=>a.Name , async=> async.MapFrom(async=>async.Name))
            .ForMember(a=> a.Value, async=> async.MapFrom(async=> async.defaultValue))
            .ForMember(async=> async.MainType, async=> async.MapFrom(async=>async.MainType)).ReverseMap();


        }
    }
}