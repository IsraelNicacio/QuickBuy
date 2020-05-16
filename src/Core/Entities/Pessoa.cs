using Core.Interfaces;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Core.Entities
{
    public class Pessoa : IBaseIdentity
    {
        public long Id { get; set; }
        public string Nome { get; set; }
        public string Sobrenome { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public virtual Endereco Endereco { get; set; }
        public virtual ICollection<Pedido> Pedidos { get; set; }
    }
}
