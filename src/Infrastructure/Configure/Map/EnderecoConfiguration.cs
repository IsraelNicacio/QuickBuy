using Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Infrastructure.Configure.Map
{
    public class EnderecoConfiguration : IEntityTypeConfiguration<Endereco>
    {
        public void Configure(EntityTypeBuilder<Endereco> builder)
        {
            builder.HasIndex(e => new { e.Id, e.EntitiesId }).HasName("pk_Endereco").IsUnique();
            builder.Property(e => e.Id).UseIdentityAlwaysColumn();
            builder.Property(e => e.Id).ValueGeneratedOnAdd();
            builder.Property(e => e.Logradouro).HasMaxLength(60).IsRequired();
            builder.Property(e => e.Numero).HasMaxLength(30);
            builder.Property(e => e.Complemento).HasMaxLength(30);
            builder.Property(e => e.Bairro).HasMaxLength(60).IsRequired();
            builder.Property(e => e.Cidade).HasMaxLength(60);
            builder.Property(e => e.Estado).HasMaxLength(60);
            builder.HasOne(e => e.Pessoa).WithOne(e => e.Endereco).HasForeignKey<Endereco>(e => e.EntitiesId).HasConstraintName("fk_Endereco_01");
            builder.HasOne(e => e.Pedido).WithOne(e => e.Endereco).HasForeignKey<Endereco>(e => e.EntitiesId).HasConstraintName("fk_Endereco_02");
        }
    }
}
