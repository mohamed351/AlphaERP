
using AutoMapper;
using RealApplication.DTO.PhoneDTOS;
using RealApplication.Models;

namespace RealApplication.Mapper
{
    public class PhoneProfiler:Profile
    {
        public PhoneProfiler()
        {
            this.CreateMap<PhoneDTO,SupplierPhone>()
            .ForMember(a=>a.ID, a=>a.MapFrom(a=>a.ID))
             .ForMember(a=>a.Phone,a=>a.MapFrom(a=>a.Phone));

                  this.CreateMap<PhoneDTO,SupplierPhone>()
            .ForMember(a=>a.ID, a=>a.MapFrom(a=>a.ID))
             .ForMember(a=>a.Phone,a=>a.MapFrom(a=>a.Phone)).ReverseMap();

              this.CreateMap<PhoneDTO,CustomerPhone>()
            .ForMember(a=>a.ID, a=>a.MapFrom(a=>a.Phone))
             .ForMember(a=>a.Phone ,a=>a.MapFrom(a=>a.Phone));

                 this.CreateMap<PhoneDTO,CustomerPhone>()
            .ForMember(a=>a.ID, a=>a.MapFrom(a=>a.Phone))
             .ForMember(a=>a.Phone ,a=>a.MapFrom(a=>a.Phone)).ReverseMap();


            
        }
        
    }
}