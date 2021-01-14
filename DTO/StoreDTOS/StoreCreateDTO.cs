using System.ComponentModel.DataAnnotations;

namespace RealApplication.DTO.StoreDTOS
{
    public class StoreCreateDTO
    {
        public int ID { get; set; }
        [Required]
        public string Name { get; set; }
    }
}