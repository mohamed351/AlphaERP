using AutoMapper;
using RealApplication.DTO.CategoriesDTOS;
using RealApplication.Models;

namespace RealApplication.Mapper
{
    public class CategoryProfiler:Profile
    {
        public CategoryProfiler()
        {
            this.CreateMap<CategoryInfoDTO,Category>()
            .ForMember(a=>a.CategoryID, async=>async.MapFrom(async=>async.CategoryID))
            .ForMember(a=>a.ID , async=>async.MapFrom(async=>async.ID))
            .ForMember(a=>a.Name , async=>async.MapFrom(async=>async.Name));

            this.CreateMap<CategoryInfoDTO,Category>()
            .ForMember(async=>async.CategoryID, async=>async.MapFrom(async=>async.CategoryID))
            .ForMember(a=>a.ID , async=>async.MapFrom(async=>async.ID))
            .ForMember(a=>a.Name , async=>async.MapFrom(async=>async.Name)).ReverseMap();
        }
    }
}