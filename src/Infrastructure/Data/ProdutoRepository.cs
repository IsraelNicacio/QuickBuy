using Core.Entities;
using Core.Interfaces;
using Infrastructure.Context;
using System.Linq;

namespace Infrastructure.Data
{
    public class ProdutoRepository : EfRepository<Produto>, IProdutoAsyncRepository
    {
        private QuickBuyContext quickBuyContext;
        public ProdutoRepository(QuickBuyContext dbContext) : base(dbContext)
        {
            this.quickBuyContext = dbContext;
        }

        public Produto RecuperarCodigoProdutoAsync(string codigoProduto)
        {
            return this.quickBuyContext.Set<Produto>().Where(x => x.CodigoInterno == codigoProduto).FirstOrDefault();
        }

        public Produto RecuperarDescricaoProdutoAsync(string descricao)
        {
            return this.quickBuyContext.Set<Produto>().Where(x => x.Descricao.ToUpper() == descricao.ToUpper()).FirstOrDefault();
        }
    }
}
