using System;
using FluentValidation;

namespace Application.Posts.Commands.VotePost
{
	public class VotePostCommandValidator : AbstractValidator<VotePostCommand>
	{
		public VotePostCommandValidator()
		{
			RuleFor(r => r.Vote)
				.LessThanOrEqualTo(1)
				.GreaterThanOrEqualTo(-1);
		}
	}
}

