using Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IProdutoAsyncRepository : IAsyncRepository<Produto>
    {
        Produto RecuperarCodigoProdutoAsync(string codigoProduto);
        Produto RecuperarDescricaoProdutoAsync(string descricao);
    }
}
