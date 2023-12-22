namespace RedditClone.Application.Communities.Commands.EditCommunity
{
    public class EditCommunityCommandValidator : AbstractValidator<EditCommunityCommand>
    {
        public EditCommunityCommandValidator()
        {
            RuleFor(c => c.Title)
                .NotEmpty()
                .MaximumLength(100);

            RuleFor(c => c.Description)
                .MaximumLength(500);

            RuleFor(c => c.CommunityType)
                .IsInEnum();
        }
    }
}