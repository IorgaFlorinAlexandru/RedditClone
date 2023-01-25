using System;
using FluentValidation;

namespace Application.Posts.Commands.CreateLinkPost
{
	public class CreateLinkPostCommandValidator : AbstractValidator<CreateLinkPostCommand>
	{
		public CreateLinkPostCommandValidator()
		{
            RuleFor(p => p.Title)
                .MaximumLength(300)
                .NotEmpty();

            RuleFor(p => p.CommunityId)
                .NotEmpty();
        }
	}
}

