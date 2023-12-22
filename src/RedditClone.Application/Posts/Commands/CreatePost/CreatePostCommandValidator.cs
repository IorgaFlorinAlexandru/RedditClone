namespace RedditClone.Application.Posts.Commands.CreatePost
{
    public class CreatePostCommandValidator : AbstractValidator<CreatePostCommand>
    {
        public CreatePostCommandValidator()
        {
            RuleFor(c => c.Title)
                .MaximumLength(100)
                .NotEmpty();

            RuleFor(c => c.ContentType)
                .IsInEnum();

            RuleFor(c => c.Content)
                .NotEmpty().When(c => c.ContentType != Domain.Enums.PostType.TEXT);
        }
    }
}
