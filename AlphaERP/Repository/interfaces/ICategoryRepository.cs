using System.Collections.Generic;
using RealApplication.DTO.CategoriesDTOS;
using RealApplication.Models;

namespace RealApplication.Repository.interfaces
{
    public interface ICategoryRepository:IRepository<Category,string>
    {
           IEnumerable<CategoryDTO> GetCategories();

    }
}