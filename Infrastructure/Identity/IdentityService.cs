using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Application.Common.Exceptions;
using Application.Common.Interfaces;
using Application.Common.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace Infrastructure.Identity
{
    public class IdentityService : IIdentityService
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IConfiguration _configuration;

        public IdentityService(UserManager<ApplicationUser> userManager, IConfiguration configuration)
        {
            _userManager = userManager;
            _configuration = configuration;
        }

        public Task<bool> ChangePassword(string email)
        {
            throw new NotImplementedException();
        }

        public async Task<string> RegisterUser(UserRegisterDTO data)
        {
            var user = new ApplicationUser
            {
                UserName = data.UserName,
                Email = data.Email
            };

            var result = await _userManager.CreateAsync(user, data.Password);
            if (!result.Succeeded) throw new UnsuccessfulRequestException(result.GetIdentityErrors());

            return user.Id;
        }

        public async Task<string> LoginUser(UserLoginDTO data)
        {
            var user = await _userManager.FindByNameAsync(data.UserName);
            if (user == null) throw new UserNotFoundException(data.UserName);

            var result = await _userManager.CheckPasswordAsync(user, data.Password);
            if (!result) throw new WrongPasswordException();

            return CreateBearerToken(user.Id);
        }

        public string CreateBearerToken(string userId)
        {
            var key = _configuration.GetValue<string>("JWTConfig:secret");

            if (key == null) throw new Exception("No JWT Key in appsettings.json.");

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim("UserID",userId)
                }),
                Expires = DateTime.UtcNow.AddDays(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key)), SecurityAlgorithms.HmacSha256Signature)
            };
            var tokenHandler = new JwtSecurityTokenHandler();
            var securityToken = tokenHandler.CreateToken(tokenDescriptor);
            var token = tokenHandler.WriteToken(securityToken);

            return token;
        }
    }
}