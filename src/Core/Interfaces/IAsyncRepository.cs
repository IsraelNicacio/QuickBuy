using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IAsyncRepository<T> where T : class
    {
        Task<T> AdicionarAsync(T entity);
        Task<int> AdicionarColecaoAsync(IEnumerable<T> entities);
        Task<T> RecuperarAsync(T entity);
        Task<T> RecuperarPorId(long Id);
        Task<IEnumerable<T>> RecuperarColecao();
        Task<int> AtualizarAsync(T entity);
        Task<int> AtualizarPorIdAsync(object Id);
        Task<int> AtualizarColecaoAsync(IEnumerable<T> entities);
        Task<int> RemoverAsync(T entity);
        Task<bool> RemoverPorIdAsync(object Id);
        Task<int> RemoverColecaoAsync(IEnumerable<T> entities);
    }
}
