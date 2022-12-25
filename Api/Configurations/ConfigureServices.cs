using System;
namespace Api.Configurations
{
	public static class ConfigureServices
	{
		public static IServiceCollection ConfigureWebServices(this IServiceCollection services)
		{
            services.AddCors(options =>
            {
                options.AddPolicy(
                    "CorsPolicy",
                    builder => builder.WithOrigins("http://localhost:4200")
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .AllowCredentials());
            });

            return services;
		}
	}
}

