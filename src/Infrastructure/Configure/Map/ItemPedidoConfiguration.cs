using Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Infrastructure.Configure.Map
{
    public class ItemPedidoConfiguration : IEntityTypeConfiguration<ItemPedido>
    {
        public void Configure(EntityTypeBuilder<ItemPedido> builder)
        {
            builder.HasKey(p => p.Id).HasName("pk_ItemPedido");
            builder.Property(p => p.Id).ValueGeneratedOnAdd();
            builder.HasOne(p => p.Pedido).WithMany(p => p.ItensPedido).HasForeignKey(fk => fk.PedidoId).HasConstraintName("fk_ItemPedido_01");
            builder.HasOne(p => p.Produto).WithOne(p => p.ItemPedido).HasForeignKey<ItemPedido>(fk => fk.ProdutoId).HasConstraintName("fk_ItemPedido_02");
            builder.Property(p => p.ValorUnitario).HasColumnType("decimal(15,2)").IsRequired();
            builder.Property(p => p.Quantidade).HasColumnType("decimal(15,4)").IsRequired();
            builder.Property(p => p.ValorSubTotal).HasColumnType("decimal(15,2)").IsRequired();
            builder.Property(p => p.ValorDesconto).HasColumnType("decimal(15,2)");
            builder.Property(p => p.ValorAcrescimo).HasColumnType("decimal(15,2)");
            builder.Property(p => p.ValorTotal).HasColumnType("decimal(15,2)").IsRequired();
            builder.Property(p => p.Observacoes).HasMaxLength(520);
            builder.Property(p => p.Status).HasColumnType("char").IsRequired();
        }
    }
}
