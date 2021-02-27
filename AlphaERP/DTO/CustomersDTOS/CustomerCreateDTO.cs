using System.Collections.Generic;
using RealApplication.DTO.AddressDTOS;
using RealApplication.DTO.PhoneDTOS;

namespace RealApplication.DTO.CustomersDTOS
{
    public class CustomerCreateDTO :CustomerDTO
    {
          public CustomerCreateDTO()
        {
            this.Address= new List<AddressDTO>();
            this.Phone= new List<PhoneDTO>();
        }
        public  ICollection<PhoneDTO> Phone { get; set; }
        public ICollection<AddressDTO> Address{get;set;}
        
    }
}