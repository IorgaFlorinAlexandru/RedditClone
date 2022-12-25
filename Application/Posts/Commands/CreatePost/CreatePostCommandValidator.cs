using System;
using FluentValidation;

namespace Application.Posts.Commands.CreatePost
{
	public class CreatePostCommandValidator : AbstractValidator<CreatePostCommand>
	{
		public CreatePostCommandValidator()
		{
			RuleFor(p => p.Title)
				.MaximumLength(300)
				.NotEmpty();
		}
	}
}

