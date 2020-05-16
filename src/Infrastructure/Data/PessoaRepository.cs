using Core.Entities;
using Core.Interfaces;
using Infrastructure.Context;
using System.Linq;

namespace Infrastructure.Data
{
    public class PessoaRepository : EfRepository<Pessoa>, IPessoaAsyncRepository
    {
        private readonly QuickBuyContext dbContext;

        public PessoaRepository(QuickBuyContext dbContext) : base(dbContext)
        {
            this.dbContext = dbContext;
        }

        public Pessoa RecuperarUsuarioAsync(string email, string senha)
        {
            var result = this.dbContext.Set<Pessoa>().Where(x => x.Email == email && x.Senha == senha).FirstOrDefault();
            //Task.Delay(TimeSpan.FromSeconds(5)).Wait();
            return result;
        }

        public Pessoa RecuperarUsuarioAsync(string email)
        {
            var result = this.dbContext.Set<Pessoa>().Where(x => x.Email == email).FirstOrDefault();
            return result;
        }
    }
}
