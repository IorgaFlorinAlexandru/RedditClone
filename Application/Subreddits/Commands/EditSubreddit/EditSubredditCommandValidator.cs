using System;
using FluentValidation;

namespace Application.Subreddits.Commands.EditSubreddit
{
	public class EditSubredditCommandValidator : AbstractValidator<EditSubredditCommand>
	{
		public EditSubredditCommandValidator()
		{
			RuleFor(r => r.Title)
				.NotEmpty()
				.MaximumLength(42);

			RuleFor(r => r.Description)
				.MaximumLength(500);
		}
	}
}

