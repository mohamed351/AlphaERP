using Microsoft.EntityFrameworkCore;
using RealApplication.Models;
using RealApplication.Repository.interfaces;
using RealApplication.DTO.CategoriesDTOS;
using System.Collections.Generic;
using System.Linq;
using RealApplication.DTO.ProductCategoryDTOS;

namespace RealApplication.Repository.Implementation
{
    public class CategoryRepository : Repository<Category, string>, ICategoryRepository
    {
        private readonly DbContext dbContext;

        public CategoryRepository(DbContext dbContext) 
        : base(dbContext)
        {
            this.dbContext = dbContext;
        }
       
        public IEnumerable<CategoryDTO> GetCategories(){
         return dbContext.Set<Category>().Include(a=>a.ChildCategory)
          .ToList()
          .Where(a=>a.CategoryID == null)
          .Select(ent => new CategoryDTO{
            ID = ent.ID,
            Name = ent.Name,
            Childern = ent.ChildCategory.Where(a=>ent.ID == a.CategoryID)
                        .Select(unit => ListWithUnites_LoadUnites(unit)).ToList()

          });

           
    }
    // public IEnumerable<ProductInfoDTO> ProductCategoryDTOs(string cateogryID){
    //     // return   dbContext.Set<Category>().Include(a=>a.ChildCategory)
    //     //   .ToList()
    //     //   .Where(a=>a.CategoryID == cateogryID)
    //     //   .Select(ent => new ProductInfoDTO{
           
    //     //   });
            
    // }

    private CategoryDTO ListWithUnites_LoadUnites(Category unite)
    {
        
        return new CategoryDTO
        {
            ID =  unite.ID,
            Name= unite.Name,
            Childern = unite.ChildCategory.Select(uniChild => ListWithUnites_LoadUnites(uniChild)).ToList()
        };
    }

         
                
 }
       

      

        
    }



