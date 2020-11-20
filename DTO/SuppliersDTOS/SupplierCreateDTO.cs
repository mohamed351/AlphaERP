using RealApplication.DTO.AddressDTOS;
using RealApplication.DTO.PhoneDTOS;
using System.Collections.Generic;
namespace RealApplication.DTO.SuppliersDTOS
{
    public class SupplierCreateDTO:SupplierDTO
    {
        public SupplierCreateDTO()
        {
            this.Address= new List<AddressDTO>();
            this.Phone= new List<PhoneDTO>();
        }
        public  ICollection<PhoneDTO> Phone { get; set; }
        public ICollection<AddressDTO> Address{get;set;}
        
    }
}