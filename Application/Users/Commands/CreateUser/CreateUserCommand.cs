using System;
using Application.Common.Interfaces;
using Application.Common.Models;
using MediatR;

namespace Application.Users.Commands.CreateUser
{
	public sealed record CreateUserCommand : IRequest<string>
	{
        public string UserName { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
    }

    public sealed class CreateUserCommandHandler : IRequestHandler<CreateUserCommand, string>
    {
        private readonly IIdentityService _identityService;
        private readonly IApplicationDbContext _context;

        public CreateUserCommandHandler(IIdentityService identityService, IApplicationDbContext context)
        {
            _identityService = identityService;
            _context = context;
        }

        public async Task<string> Handle(CreateUserCommand request, CancellationToken cancellationToken)
        {
            var data = new UserRegisterDTO
            {
                Email = request.Email,
                UserName = request.UserName,
                Password = request.Password
            };
            var userId = await _identityService.RegisterUser(data);

            //TODO CREATE PROFILE OR USER OBJECT IN HERE TOO

            return userId;
        }
    }
}

