namespace RedditClone.Application.Communities.Commands.CreateCommunity
{
    public class CreateCommunityCommandValidator : AbstractValidator<CreateCommunityCommand>
    {
        public CreateCommunityCommandValidator()
        {
            RuleFor(x => x.Name)
                .MinimumLength(3)
                .MaximumLength(21)
                .NotEmpty();

            RuleFor(x => x.CommunityType)
                .IsInEnum();
        }
    }
}
