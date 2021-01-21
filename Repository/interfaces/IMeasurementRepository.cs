using System.Threading.Tasks;
using RealApplication.Models;
namespace RealApplication.Repository.interfaces
{
    public interface IMeasurementRepository:IRepository<Measurement,int>
    {
        
          Task<string> GetTypeOfMeasurement(int measurementType);
    }
}