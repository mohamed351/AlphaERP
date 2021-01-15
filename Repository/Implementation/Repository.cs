using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using RealApplication.DTO;
using RealApplication.Repository.interfaces;

namespace RealApplication.Repository.Implementation
{
    public class  Repository<TEntity, TKey> : IRepository<TEntity, TKey> where TEntity : class
    {
        private readonly DbContext dbContext;

        public Repository(DbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        public void Add(TEntity entity)
        {
            dbContext.Add(entity);
        }

        public void Edit(TEntity entity)
        {
            dbContext.Entry<TEntity>(entity).State = EntityState.Modified;
        }

        public IEnumerable<TEntity> GetAll()
        {
            return dbContext.Set<TEntity>().ToList();
        }

        public IEnumerable<TEntity> GetByCondititon(Func<TEntity, bool> func )
        {
           return   dbContext.Set<TEntity>().Where(func).ToList();
        }

        public TEntity GetByID(TKey key)
        {
            return dbContext.Set<TEntity>().Find(key);
        }

        public int GetCount(Func<TEntity, bool> Condtion)
        {
            return dbContext.Set<TEntity>().Where(Condtion).Count();
        }

        public IEnumerable<TEntity> GetEntityDataTable(int PageStart,int PageSize , Func<TEntity,bool> condition ,Func<TEntity,TKey> orderBy)
        {
           return dbContext.Set<TEntity>()
           .Where(condition)
           .OrderBy(orderBy)
           .Skip(PageSize * PageStart)
           .Take(PageSize).ToList();
        }

        public bool ValueExist(Func<TEntity, bool> condition)
        {
           return dbContext.Set<TEntity>().Any(condition);
        }
    }
}