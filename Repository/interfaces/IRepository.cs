using System;
using System.Collections.Generic;
using System.Linq;
using RealApplication.DTO;

namespace RealApplication.Repository.interfaces
{
    public interface IRepository<TEntity,TKey> where TEntity:class
    {
        IEnumerable<TEntity> GetAll();
        TEntity GetByID(TKey key);
        void Add(TEntity entity);
        void Edit(TEntity entity);

         IQueryable<TEntity> GetIQueryableData();
        IEnumerable<TEntity> GetByCondititon(Func<TEntity, bool> func);

        IEnumerable<TEntity> GetEntityDataTable(int PageStart,int PageSize , Func<TEntity,bool> condition ,Func<TEntity,TKey> orderBy);
         
         int GetCount(Func<TEntity,bool> Condtion);

         bool ValueExist(Func<TEntity,bool> condition);
        



        

    }
}