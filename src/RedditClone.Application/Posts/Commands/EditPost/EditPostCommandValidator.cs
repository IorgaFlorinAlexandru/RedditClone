namespace RedditClone.Application.Posts.Commands.EditPost
{
    public class EditPostCommandValidator : AbstractValidator<EditPostCommand>
    {
        public EditPostCommandValidator()
        {
            RuleFor(c => c.Title)
                .MaximumLength(100)
                .NotEmpty();

            RuleFor(c => c.ContentType)
                .IsInEnum();
                
        }
    }
}
