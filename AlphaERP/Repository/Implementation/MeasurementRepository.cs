using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RealApplication.Models;
using RealApplication.Models.Enum;
using RealApplication.Repository.interfaces;

namespace RealApplication.Repository.Implementation
{
    public class MeasurementRepository : Repository<Measurement, int> , IMeasurementRepository
    {
        private readonly DbContext dbContext;

        public MeasurementRepository(DbContext dbContext) 
        : base(dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task<string> GetTypeOfMeasurement(int measurementType){
            
        TypeOfMeasurements type = (TypeOfMeasurements) measurementType;
           var result = await  dbContext.Set<Measurement>().FirstOrDefaultAsync(a=>a.IsMain == true && a.MainType == type);
          return result.Name;
        }   
        public decimal ConvertToMainMeasurement(List<Measurement> measurements,decimal qtu, TypeOfMeasurements typeOfMeasurements)
        {
           var measurement = measurements.FirstOrDefault(a => a.IsMain && a.MainType == typeOfMeasurements);
          return qtu *  measurement.defaultValue;
        }
    }
}