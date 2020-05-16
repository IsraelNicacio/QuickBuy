using Core.Entities;
using Core.Interfaces;
using Infrastructure.Context;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class EnderecoRepository : EfRepository<Endereco>, IEnderecoAsyncRepository
    {
        public EnderecoRepository(QuickBuyContext dbContext) : base(dbContext)
        {
        }
    }
}
