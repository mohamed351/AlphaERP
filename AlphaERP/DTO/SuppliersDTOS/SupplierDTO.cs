using System.ComponentModel.DataAnnotations;

namespace RealApplication.DTO.SuppliersDTOS
{
    public class SupplierDTO
    {
       public string ID { get; set; }
        [Required]
        public string SupplierName { get; set; }
    }
}