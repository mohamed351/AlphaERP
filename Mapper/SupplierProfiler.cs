using System;
using AutoMapper;
using RealApplication.DTO.PhoneDTOS;
using RealApplication.DTO.SuppliersDTOS;
using RealApplication.Models;
using System.Linq;
using System.Collections.Generic;
using RealApplication.DTO.AddressDTOS;

namespace RealApplication.Mapper
{
    public class SupplierProfiler : Profile
    {
        public SupplierProfiler()
        {
            this.CreateMap<Supplier,SupplierDTO>()
          .ForMember(async=>async.ID, async=>async.MapFrom(async=>async.ID))
           .ForMember(a=>a.SupplierName,async=>async.MapFrom(async=>async.Name));

           this.CreateMap<Supplier,SupplierDTO>()
          .ForMember(async=>async.ID, async=>async.MapFrom(async=>async.ID))
           .ForMember(a=>a.SupplierName,async=>async.MapFrom(async=>async.Name))
           .ReverseMap();

            this.CreateMap<SupplierCreateDTO,Supplier>()
            .ForMember(a=>a.ID, a=>a.MapFrom(a=>a.ID))
            .ForMember(a=>a.Name, a=>a.MapFrom(a=>a.SupplierName))
             .AfterMap((src, dest)=> src.Phone.Each(a=> dest.Phones.Add(new SupplierPhone(){ Phone =a.Phone}) ))
             .AfterMap((src, dest)=> src.Address.Each(a=> dest.SupplierAddresses.Add(new SupplierAddress(){ Address =a.Address}) ));

          

             this.CreateMap<Supplier,SupplierCreateDTO>()
            .ForMember(a=>a.ID, a=>a.MapFrom(a=>a.ID))
            .ForMember(a=>a.SupplierName, a=>a.MapFrom(a=>a.Name))
             .AfterMap((src, dest)=> src.Phones.Each(a=> dest.Phone.Add(new PhoneDTO(){ Phone =a.Phone , ID= a.ID}) ))
             .AfterMap((src, dest)=> src.SupplierAddresses.Each(a=> dest.Address.Add(new AddressDTO (){  Address= a.Address , ID=a.ID }) ));

        
    }



    }
  
}
/*
           this.CreateMap<Supplier,SupplierCreateDTO>()
           .ForMember(async=>async.ID, async => async.MapFrom(async=>async.ID))
           .ForMember(async=>async.SupplierName, async=>async.MapFrom(a=>a.Name))
           .ForMember(a =>a.Address, a=>a.MapFrom(a=>a.SupplierAddresses))
           .ForMember(a=>a.Phone, a=>a.MapFrom(a=>a.Phones));
            dest.Name = src.SupplierName;
                foreach (var item in src.Phone)
                 {
                 dest.Phones.Add(new SupplierPhone(){
                 Phone= item.Phone
                 });
            
                  }
              foreach (var item in src.Address)
              {
                 dest.SupplierAddresses.Add(new SupplierAddress(){
                 Address = item.Address
                });
            
             }  
*/
  //need to refactor 
   

     
