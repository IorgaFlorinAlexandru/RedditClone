using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RedditClone.Domain.Repositories;
using RedditClone.Infrastructure.Data;
using RedditClone.Infrastructure.Repositories;

namespace RedditClone.Infrastructure
{
    public static class ConfigureInfrastructure
    {
        public static IServiceCollection AddInfrastructureServices(this IServiceCollection services, IConfiguration config)
        {
            services.AddDbContext<ApplicationDbContext>(opt =>
                opt.UseNpgsql(config.GetConnectionString("PostGreConnectionString")));

            services.AddScoped<IRepositoryWrapper, RepositoryWrapper>();

            return services;
        }
    }
}
