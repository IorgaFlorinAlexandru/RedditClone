using System;
using FluentValidation;

namespace Application.Comments.Commands.EditComment
{
	public class EditCommentCommandValidator : AbstractValidator<EditCommentCommand>
	{
		public EditCommentCommandValidator()
		{
			RuleFor(c => c.Text)
				.NotEmpty();
		}
	}
}

