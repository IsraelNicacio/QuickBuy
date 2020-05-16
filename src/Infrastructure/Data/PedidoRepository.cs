using Core.Entities;
using Core.Interfaces;
using Infrastructure.Context;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class PedidoRepository : EfRepository<Pedido>, IPedidoAsyncRepository
    {
        public PedidoRepository(QuickBuyContext dbContext) : base(dbContext)
        {

        }
    }
}
