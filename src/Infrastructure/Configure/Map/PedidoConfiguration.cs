using Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Configure.Map
{
    public class PedidoConfiguration : IEntityTypeConfiguration<Pedido>
    {
        public void Configure(EntityTypeBuilder<Pedido> builder)
        {
            builder.HasKey(p => p.Id).HasName("pk_Pedido");
            builder.Property(p => p.Id).ValueGeneratedOnAdd();
            builder.Property(p => p.DataPedido).IsRequired();
            builder.Property(p => p.DataPrevisaoEntrega);
            builder.Property(p => p.Valor).HasColumnType("decimal(15,2)").IsRequired();
            builder.Property(p => p.Observacao).HasMaxLength(520);
            builder.Property(p => p.Status).HasColumnType("char").IsRequired();
            builder.HasOne(p => p.Pessoa).WithMany(p => p.Pedidos).HasForeignKey(fk => fk.PessoaId).HasConstraintName("fk_Pedido_01");
        }
    }
}
