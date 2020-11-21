using AutoMapper;
using RealApplication.DTO.AddressDTOS;
using RealApplication.DTO.CustomersDTOS;
using RealApplication.DTO.PhoneDTOS;
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
           
               this.CreateMap<CustomerCreateDTO,Customer>()
            .ForMember(a=>a.ID, a=>a.MapFrom(a=>a.ID))
            .ForMember(a=>a.CustomerName, a=>a.MapFrom(a=> a.CustomerName ))
             .AfterMap((src, dest)=> src.Phone.Each(a=> dest.Phones.Add(new CustomerPhone (){ Phone =a.Phone}) ))
             .AfterMap((src, dest)=> src.Address.Each(a=> dest.CustomerAddresses.Add(new CustomerAddress(){ Address =a.Address}) ));

             this.CreateMap<Customer,CustomerCreateDTO>()
            .ForMember(a=>a.ID, a=>a.MapFrom(a=>a.ID))
            .ForMember(a=>a.CustomerName, a=>a.MapFrom(a=>a.CustomerName ))
             .AfterMap((src, dest)=> src.Phones.Each(a=> dest.Phone.Add(new PhoneDTO{ Phone =a.Phone , ID= a.ID}) ))
             .AfterMap((src, dest)=> src.CustomerAddresses.Each(a=> dest.Address.Add(new AddressDTO (){  Address= a.Address , ID=a.ID }) ));
       }
    }
}