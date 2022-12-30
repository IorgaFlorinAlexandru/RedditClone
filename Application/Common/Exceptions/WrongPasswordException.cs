namespace Application.Common.Exceptions
{
    public class WrongPasswordException : Exception
    {
        const string ERROR_MESSAGE = "Wrong username or password";

        public WrongPasswordException()
            : base(ERROR_MESSAGE)
        {
        }
    }
}

