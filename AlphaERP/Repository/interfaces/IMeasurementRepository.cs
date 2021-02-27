using System.Collections.Generic;
using System.Threading.Tasks;
using RealApplication.Models;
using RealApplication.Models.Enum;

namespace RealApplication.Repository.interfaces
{
    public interface IMeasurementRepository:IRepository<Measurement,int>
    {
        
          Task<string> GetTypeOfMeasurement(int measurementType);
        decimal ConvertToMainMeasurement(List<Measurement> measurements, decimal qtu, TypeOfMeasurements typeOfMeasurements);

    }
}