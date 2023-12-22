namespace RedditClone.Application.Communities.Commands.ChangeDescription
{
    public class ChangeDescriptionCommandValidator : AbstractValidator<ChangeDescriptionCommand>
    {
        public ChangeDescriptionCommandValidator()
        {
            RuleFor(c => c.Description)
                .MaximumLength(500);
        }
    }
}
