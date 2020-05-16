using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Interfaces;
using Infrastructure.Context;
using Infrastructure.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace Web
{
    public class Startup
    {
        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            var buider = new ConfigurationBuilder();
            buider.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);

            Configuration = buider.Build();
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Latest);

            var connectionString = Configuration.GetConnectionString("QuickBuyDB");
            
            services.AddDbContext<QuickBuyContext>(options => 
            options.UseNpgsql(connectionString, m => m.MigrationsAssembly("Infrastructure")));

            services.AddScoped<DbContext, QuickBuyContext>();
            services.AddScoped<IProdutoAsyncRepository, ProdutoRepository>();
            services.AddScoped<IPessoaAsyncRepository, PessoaRepository>();
            services.AddScoped<IPedidoAsyncRepository, PedidoRepository>();
            services.AddScoped<IEnderecoAsyncRepository, EnderecoRepository>();
            
            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
