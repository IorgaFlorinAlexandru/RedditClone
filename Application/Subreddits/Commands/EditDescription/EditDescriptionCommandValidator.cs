using System;
using FluentValidation;

namespace Application.Subreddits.Commands.EditDescription
{
	public class EditDescriptionCommandValidator : AbstractValidator<EditDescriptionCommand>
	{
		public EditDescriptionCommandValidator()
		{
		}
	}
}

