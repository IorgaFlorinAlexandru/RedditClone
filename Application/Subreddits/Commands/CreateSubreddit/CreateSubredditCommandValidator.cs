using System;
using FluentValidation;

namespace Application.Subreddits.Commands.CreateSubreddit
{
	public sealed class CreateSubredditCommandValidator : AbstractValidator<CreateSubredditCommand>
	{
		public CreateSubredditCommandValidator()
		{
			RuleFor(r => r.Name)
				.NotEmpty()
				.MaximumLength(21);
		}
	}
}

