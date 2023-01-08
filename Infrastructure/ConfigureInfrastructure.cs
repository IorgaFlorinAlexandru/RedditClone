using System;
using Infrastructure.Identity;
using System.Text;
using Infrastructure.Persistence;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Application.Common.Interfaces;

namespace Infrastructure
{
	public static class ConfigureInfrastructure
	{
		public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration config)
		{
            #region Database
            services.AddDbContext<ApplicationDbContext>(opt =>
                opt.UseNpgsql(config.GetConnectionString("PostGreConnectionString")));
            #endregion

            #region Identity
            services.AddDefaultIdentity<ApplicationUser>()
                .AddRoles<IdentityRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>();

            services.AddIdentityServer()
                .AddApiAuthorization<ApplicationUser, ApplicationDbContext>();

            var jwtConfig = config.GetSection("JWTConfig");
            services.AddAuthentication(options => {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme; //Sets Authorize method to Bearer
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
                .AddJwtBearer(options =>
                {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateAudience = false, //More security options https://www.quora.com/How-can-I-understand-audience-and-issuer-in-JWT-authentication?share=1
                        ValidateIssuer = false,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtConfig["secret"]!))
                    };
                });

            services.Configure<IdentityOptions>(options => {
                options.SignIn.RequireConfirmedAccount = false;
                options.Password.RequireDigit = true;
                options.Password.RequireNonAlphanumeric = true;
                options.Password.RequireLowercase = false;
                options.Password.RequireUppercase = false;
                options.Password.RequiredLength = 4;
            });

            services.AddAuthorization(options =>
                options.AddPolicy("CanPurge", policy => policy.RequireRole("Administrator")));
            #endregion

            #region Infrastructure
            services.AddTransient<IApplicationDbContext, ApplicationDbContext>();
            services.AddTransient<IIdentityService, IdentityService>();
            #endregion

            return services;
		}
	}
}

