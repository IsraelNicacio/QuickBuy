using Core.Interfaces;
using System.ComponentModel.DataAnnotations.Schema;

namespace Core.Entities
{
    public class Produto : IBaseIdentity
    {
        public long Id { get; set; }
        public string CodigoInterno { get; set; }
        public string Descricao { get; set; }
        public string UnidadeMedida { get; set; }
        public decimal ValoUnitario { get; set; }
        public string NomeArquivo { get; set; }
        public virtual ItemPedido ItemPedido { get; set; }
    }
}
