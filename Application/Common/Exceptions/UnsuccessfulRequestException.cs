namespace Application.Common.Exceptions
{
    public class UnsuccessfulRequestException : Exception
    {
        public UnsuccessfulRequestException(string message)
            : base(message)
        {
        }

        public UnsuccessfulRequestException(string message, Exception e)
            : base(message, e)
        {
        }

        //TODO MODIFY EXP MESSAGE BASED ON AN ARRAY OF ERRORS
        //public UnsuccessfulRequestException(string[] errors)
        //{
        //	Message = "There have been one or more errors:\n";
        //	foreach (string error in errors)
        //	{
        //		Message += error + "\n";
        //	}
        //}
    }
}

