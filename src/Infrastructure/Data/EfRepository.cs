using Core.Interfaces;
using Infrastructure.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data
{
    public class EfRepository<T> : IAsyncRepository<T> where T : class
    {
        private readonly QuickBuyContext dbContext;

        public EfRepository(QuickBuyContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public void Dispose()
        {
            dbContext.Dispose();
            GC.SuppressFinalize(this);
        }

        public async Task<T> AdicionarAsync(T entity)
        {
            var r = dbContext.Set<T>().Add(entity);
            dbContext.SaveChanges();
            return r.Entity;
        }

        public Task<int> AdicionarColecaoAsync(IEnumerable<T> entities)
        {
            throw new NotImplementedException();
        }

        public async Task<int> AtualizarAsync(T entity)
        {
            dbContext.Entry(entity).State = EntityState.Modified;
            return dbContext.SaveChanges();
        }

        public Task<int> AtualizarColecaoAsync(IEnumerable<T> entities)
        {
            throw new NotImplementedException();
        }

        public async Task<int> AtualizarPorIdAsync(object Id)
        {
            throw new NotImplementedException();
        }

        public virtual async Task<T> RecuperarAsync(T entity)
        {
            var result = dbContext.Set<T>().FindAsync(entity);
            Task.Delay(TimeSpan.FromSeconds(5)).Wait();
            return await result;
        }

        public virtual async Task<IEnumerable<T>> RecuperarColecao()
        {
            var result = dbContext.Set<T>().ToArrayAsync();
            Task.Delay(TimeSpan.FromSeconds(5)).Wait();
            return await result;
        }

        public virtual async Task<T> RecuperarPorId(long Id)
        {
            var result = dbContext.Set<T>().FindAsync(Id);
            Task.Delay(TimeSpan.FromSeconds(5)).Wait();
            return await result;
        }

        public virtual async Task<int> RemoverAsync(T entity)
        {
            var r = dbContext.Set<T>().Remove(entity);
            Task.Delay(TimeSpan.FromSeconds(5)).Wait();
            return dbContext.SaveChanges();
        }

        public Task<int> RemoverColecaoAsync(IEnumerable<T> entities)
        {
            throw new NotImplementedException();
        }

        public Task<bool> RemoverPorIdAsync(object Id)
        {
            throw new NotImplementedException();
        }

        private async Task<int> CommitAsync()
        {
            return await dbContext.SaveChangesAsync();
        }
    }
}
