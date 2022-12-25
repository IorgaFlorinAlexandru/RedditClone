using System;
using Application.Common.Models;

namespace Application.Common.Interfaces
{
	public interface IIdentityService
	{
		Task<string> LoginUser(UserLoginDTO data);
		Task<string> RegisterUser(UserRegisterDTO data);
		Task<bool> ChangePassword(string email);
		string CreateBearerToken(string userId);
	}
}

