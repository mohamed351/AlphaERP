using Microsoft.EntityFrameworkCore;
using RealApplication.Models;
using RealApplication.Repository.interfaces;

namespace RealApplication.Repository.Implementation
{
    public class MeasurementRepository : Repository<Measurement, int> , IMeasurementRepository
    {
        public MeasurementRepository(DbContext dbContext) 
        : base(dbContext)
        {
        }
    }
}