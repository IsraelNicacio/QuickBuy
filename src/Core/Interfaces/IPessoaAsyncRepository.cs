using Core.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IPessoaAsyncRepository : IAsyncRepository<Pessoa>
    {
        Pessoa RecuperarUsuarioAsync(string email, string senha);
        Pessoa RecuperarUsuarioAsync(string email);
    }
}
