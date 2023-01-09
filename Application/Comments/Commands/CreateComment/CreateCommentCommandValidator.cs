using System;
using FluentValidation;

namespace Application.Comments.Commands.CreateComment
{
	public class CreateCommentCommandValidator : AbstractValidator<CreateCommentCommand>
	{
		public CreateCommentCommandValidator()
		{
			RuleFor(c => c.Text)
				.NotEmpty();

			RuleFor(c => c.PostId)
				.GreaterThan(0);
		}
	}
}

