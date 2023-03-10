using System;
using Api.Services;
using Application.Common.Interfaces;

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

            services.AddScoped<ILoggingService,NlogService>();
            services.AddScoped<IFileService, FileService>();


            return services;
		}
	}
}

