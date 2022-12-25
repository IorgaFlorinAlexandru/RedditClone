using Microsoft.OpenApi.Models;

namespace Api.Configurations
{
    public static class ConfigureSwagger
    {
        public static IServiceCollection ConfigureSwaggerForApi(this IServiceCollection services)
        {
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo
                {
                    Title = ".NET Reddit Clone App API",
                    Version = "v1",
                    Description = "Reddit Clone App made with .NET 7",
                    Contact = new OpenApiContact
                    {
                        Name = "Iorga Florin Alexandru",
                        Email = "iorgaflorinalexandru@gmail.com",
                    }
                });

                c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
                {
                    Name = "Authorization",
                    Type = SecuritySchemeType.ApiKey,
                    Scheme = "Bearer",
                    BearerFormat = "JWT",
                    In = ParameterLocation.Header,
                    Description = "JWT Bearer Auth Token located in header"
                });

                c.AddSecurityRequirement(new OpenApiSecurityRequirement {
                    {
                        new OpenApiSecurityScheme
                        {
                            Reference = new OpenApiReference
                            {
                                Type = ReferenceType.SecurityScheme,
                                Id = "Bearer"
                            }
                        },
                        Array.Empty<string>()
                    }
                });
            });

            return services;
        }
    }
}

