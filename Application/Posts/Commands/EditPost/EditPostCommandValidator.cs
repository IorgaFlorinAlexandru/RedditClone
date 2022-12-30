using System;
using FluentValidation;

namespace Application.Posts.Commands.EditPost
{
	public class EditPostCommandValidator : AbstractValidator<EditPostCommand>
	{
		public EditPostCommandValidator()
		{
			RuleFor(p => p.Id)
				.GreaterThan(0);

			RuleFor(p => p.Title)
				.MaximumLength(300)
				.NotEmpty();
		}
	}
}

