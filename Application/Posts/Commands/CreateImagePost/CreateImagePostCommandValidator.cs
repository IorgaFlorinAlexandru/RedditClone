using System;
using FluentValidation;

namespace Application.Posts.Commands.CreateImagePost
{
	public class CreateImagePostCommandValidator : AbstractValidator<CreateImagePostCommand>
	{
		public CreateImagePostCommandValidator()
		{
            RuleFor(p => p.Title)
                .MaximumLength(300)
                .NotEmpty();

            RuleFor(p => p.CommunityId)
                .NotEmpty();
        }
	}
}

