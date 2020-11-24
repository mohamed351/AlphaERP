using AutoMapper;
using RealApplication.DTO.ProductDTOS;
using RealApplication.Models;

namespace RealApplication.Mapper
{
    public class ProductProfiler:Profile
    {

        public ProductProfiler()
        {
            this.CreateMap<Product,ProductsDTO>()
              .ForMember(a=>a.ID,async=>async.MapFrom(a=>a.ID))
              .ForMember(async=>async.CategoryID, async=>async.MapFrom(async=>async.CategoryID))
              .ForMember(async =>async.ProductName , async => async.MapFrom(async=>async.ProductName))
              .ForMember(async=>async.PurchasingPrice , async=>async.MapFrom(a=>a.PurchasingPrice))
              .ForMember(async=>async.SellingPrice, async=>async.MapFrom(async=>async.SellingPrice))
              .ForMember(async=>async.TypeOfMeasurements, async=>async.MapFrom(a=>a.TypeOfMeasurement));

            this.CreateMap<Product,ProductsDTO>()
              .ForMember(a=>a.ID,async=>async.MapFrom(a=>a.ID))
              .ForMember(async=>async.CategoryID, async=>async.MapFrom(async=>async.CategoryID))
              .ForMember(async =>async.ProductName , async => async.MapFrom(async=>async.ProductName))
              .ForMember(async=>async.PurchasingPrice , async=>async.MapFrom(a=>a.PurchasingPrice))
              .ForMember(async=>async.SellingPrice, async=>async.MapFrom(async=>async.SellingPrice))
              .ForMember(async=>async.TypeOfMeasurements, async=>async.MapFrom(a=>a.TypeOfMeasurement)).ReverseMap();


        }
        
    }
}