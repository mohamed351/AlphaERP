using System.Collections.Generic;
namespace RealApplication.DTO
{
    public class DataTableDTO<T>
    {
        public IEnumerable<T>  Data { get; set; }
        public int TotalCount { get; set; }
        
    }
}