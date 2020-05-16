using Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Configure.Map
{
    public class PessoaConfiguration : IEntityTypeConfiguration<Pessoa>
    {
        public void Configure(EntityTypeBuilder<Pessoa> builder)
        {
            builder.HasIndex(p => p.Id).HasName("pk_Pessoa").IsUnique();
            builder.Property(p => p.Id).UseIdentityAlwaysColumn();
            builder.Property(p =>   p.Id).ValueGeneratedOnAdd();
            builder.Property(p =>   p.Nome).IsRequired().HasMaxLength(30);
            builder.Property(p =>   p.Sobrenome).HasMaxLength(30);
            builder.Property(p =>   p.Email).HasMaxLength(256);
            builder.Property(p =>   p.Senha).IsRequired().HasMaxLength(256);
        }
    }
}
