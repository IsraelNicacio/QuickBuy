using Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Configure.Map
{
    public class ProdutoConfiguration : IEntityTypeConfiguration<Produto>
    {
        public void Configure(EntityTypeBuilder<Produto> builder)
        {
            builder.HasIndex(p => p.Id).HasName("pk_Produto").IsUnique();
            builder.Property(p => p.Id).UseIdentityAlwaysColumn();
            builder.Property(p => p.Id).ValueGeneratedOnAdd();
            builder.Property(p => p.CodigoInterno).HasMaxLength(60).IsRequired();
            builder.Property(p => p.Descricao).HasMaxLength(120).IsRequired();
            builder.Property(p => p.UnidadeMedida).HasMaxLength(6).IsRequired();
            builder.Property(p => p.ValoUnitario).HasColumnType("decimal(15,2)").IsRequired();
            builder.Property(p => p.NomeArquivo).HasMaxLength(120);
        }
    }
}
