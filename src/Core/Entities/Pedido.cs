
using Core.Interfaces;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Core.Entities
{
    public class Pedido : IBaseIdentity
    {
        public long Id { get; set; }
        public DateTime DataPedido { get; set; }
        public DateTime DataPrevisaoEntrega { get; set; }
        public long PessoaId { get; set; }
        public long EnderecoEntregaId { get; set; }
        public decimal Valor { get; set; }
        public string Observacao { get; set; }
        public char Status { get; set; }
        public virtual ICollection<ItemPedido> ItensPedido { get; set; }
        public virtual Pessoa Pessoa { get; set; }
        public virtual Endereco Endereco { get; set; }

    }
}
