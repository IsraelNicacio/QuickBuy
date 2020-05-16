using Core.Interfaces;
using System.ComponentModel.DataAnnotations.Schema;

namespace Core.Entities
{
    public class ItemPedido : IBaseIdentity
    {
        public long Id { get; set; }
        public long PedidoId { get; set; }
        public long ProdutoId { get; set; }
        public decimal ValorUnitario { get; set; }
        public decimal Quantidade { get; set; }
        public decimal ValorSubTotal { get; set; }
        public decimal ValorDesconto { get; set; }
        public decimal ValorAcrescimo { get; set; }
        public decimal ValorTotal { get; set; }
        public string Observacoes { get; set; }
        public char Status { get; set; }
        public virtual Pedido Pedido { get; set; }
        public virtual Produto Produto { get; set; }
    }
}
