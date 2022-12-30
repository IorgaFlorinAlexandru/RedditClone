using System;
namespace Application.Common.Models
{
	public record UserLoginDTO
	{
		public string UserName { get; set; } = string.Empty;
		public string Password { get; set; } = string.Empty;
	}
}

