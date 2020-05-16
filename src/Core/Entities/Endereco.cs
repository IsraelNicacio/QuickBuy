using Core.Interfaces;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Core.Entities
{
    public class Endereco : IBaseIdentity
    {
        public long Id { get; set; }
        public long EntitiesId { get; set; }
        public string Logradouro { get; set; }
        public string Numero { get; set; }
        public string Complemento { get; set; }
        public string Bairro { get; set; }
        public string CEP { get; set; }
        public string Cidade { get; set; }
        public string Estado { get; set; }
        public virtual Pessoa Pessoa { get; set; }
        public virtual Pedido Pedido { get; set; }
    }
}
