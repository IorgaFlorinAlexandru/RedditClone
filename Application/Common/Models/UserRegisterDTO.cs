using System;
namespace Application.Common.Models
{
	public record UserRegisterDTO
	{
		public string UserName { get; set; } = string.Empty;
		public string Password { get; set; } = string.Empty;
		public string Email { get; set; } = string.Empty;
	}
}

