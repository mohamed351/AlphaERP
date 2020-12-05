using System;
using System.Drawing;
using AutoMapper;
using Microsoft.AspNetCore.Hosting;
using RealApplication.DTO.ProductDTOS;
using RealApplication.Models;

using System.IO;

namespace RealApplication.Mapper
{
    public class ProductProfiler:Profile
    {
      

        public ProductProfiler( )
        {
            
            this.CreateMap<Product,ProductsDTO>()
              .ForMember(a=>a.ID,async=>async.MapFrom(a=>a.ID))
              .ForMember(async=>async.CategoryID, async=>async.MapFrom(async=>async.CategoryID))
              .ForMember(async =>async.ProductName , async => async.MapFrom(async=>async.ProductName))
              .ForMember(async=>async.PurchasingPrice , async=>async.MapFrom(a=>a.PurchasingPrice))
              .ForMember(async=>async.SellingPrice, async=>async.MapFrom(async=>async.SellingPrice))
              .ForMember(async=>async.IsValidInPointOfSales, async =>async.MapFrom(a=>a.IsValidInPointOfSales))
              .ForMember(async=>async.IsValidInStorage, async=> async.MapFrom(async=>async.IsValidInStorage))
              .ForMember(async=>async.BarCode, async=>async.MapFrom(a=> a.BarCode))
              .ForMember(async=>async.TypeOfMeasurements, async=>async.MapFrom(a=>a.TypeOfMeasurement))
              .ForMember(async=>async.IsValidOnline, async=> async.MapFrom(a=>a.IsValidOnline));
      

             this.CreateMap<Product,ProductsDTO>()
              .ForMember(a=>a.ID,async=>async.MapFrom(a=>a.ID))
              .ForMember(async=>async.CategoryID, async=>async.MapFrom(async=>async.CategoryID))
              .ForMember(async =>async.ProductName , async => async.MapFrom(async=>async.ProductName))
              .ForMember(async=>async.PurchasingPrice , async=>async.MapFrom(a=>a.PurchasingPrice))
              .ForMember(async=>async.SellingPrice, async=>async.MapFrom(async=>async.SellingPrice))
              .ForMember(async=>async.IsValidInPointOfSales, async =>async.MapFrom(a=>a.IsValidInPointOfSales))
              .ForMember(async=>async.IsValidInStorage, async=> async.MapFrom(async=>async.IsValidInStorage))
              .ForMember(async=>async.BarCode, async=>async.MapFrom(a=> a.BarCode))
              .ForMember(async=>async.TypeOfMeasurements, async=>async.MapFrom(a=>a.TypeOfMeasurement))
              .ForMember(async=> async.IsValidOnline,async=>async.MapFrom(async=>async.IsValidOnline))
              .ReverseMap();
           
        }

     

        
        
    }
}