namespace Application.Common.Exceptions
{
    public class UserNotFoundException : Exception
    {
        public readonly string ERROR_MESSAGE = "Wrong username or password";

        public UserNotFoundException(string userName)
            : base($"User with name '{userName}' has not been found")
        {
        }
    }
}

