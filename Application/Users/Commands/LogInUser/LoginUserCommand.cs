using Application.Common.Interfaces;
using Application.Common.Models;
using MediatR;

namespace Application.Users.Commands.LogInUser
{
    public sealed record LoginUserCommand : IRequest<string>
	{
		public string Username { get; set; } = string.Empty;
		public string Password { get; set; } = string.Empty;
	}

    public sealed class LoginUserCommandHandler : IRequestHandler<LoginUserCommand, string>
    {
        private readonly IIdentityService _identityService;
        //private readonly IApplicationDbContext _context;

        public LoginUserCommandHandler(IIdentityService identityService)
        {
            _identityService = identityService;
        }

        public async Task<string> Handle(LoginUserCommand request, CancellationToken cancellationToken)
        {
            var data = new UserLoginDTO
            {
                UserName = request.Username,
                Password = request.Password
            };
            var token = await _identityService.LoginUser(data);

            return token;
        }
    }
}

