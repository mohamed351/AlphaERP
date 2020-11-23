using System.Collections.Generic;

namespace RealApplication.DTO.CategoriesDTOS
{
    public class CategoryDTO
    {
        public CategoryDTO()
        {
            this.Childern = new List<CategoryDTO>();
        }
        public string ID { get; set; }
        public string Name {get; set;}

        public  List<CategoryDTO>  Childern {get; set;}

    }
}