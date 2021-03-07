using System.ComponentModel.DataAnnotations;

namespace RealApplication.DTO.CustomersDTOS
{
    public class CustomerDTO
    {
        public string ID{ get; set; }
        [Required]
        public string CustomerName { get; set; }
    }
}