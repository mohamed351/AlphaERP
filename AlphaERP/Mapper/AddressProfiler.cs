using AutoMapper;
using RealApplication.DTO.AddressDTOS;
using RealApplication.Models;

namespace RealApplication.Mapper
{
    public class AddressProfiler:Profile
    {
        public AddressProfiler()
        {
            this.CreateMap<AddressDTO,SupplierAddress>()
            .ForMember(a=>a.ID, a=>a.MapFrom(a=>a.ID))
            .ForMember(a=>a.Address, a=> a.MapFrom(a=>a.Address));

             this.CreateMap<AddressDTO,SupplierAddress>()
            .ForMember(a=>a.ID, a=>a.MapFrom(a=>a.ID))
            .ForMember(a=>a.Address, a=> a.MapFrom(a=>a.Address)).ReverseMap();

            this.CreateMap<AddressDTO,CustomerAddress>()
            .ForMember(a=>a.ID, a=>a.MapFrom(a=>a.ID))
            .ForMember(a=>a.Address, a=>a.MapFrom(a=>a.Address));

            this.CreateMap<AddressDTO,CustomerAddress>()
            .ForMember(a=>a.ID, a=>a.MapFrom(a=>a.ID))
            .ForMember(a=>a.Address, a=>a.MapFrom(a=>a.Address)).ReverseMap();

            
        }
    }
}