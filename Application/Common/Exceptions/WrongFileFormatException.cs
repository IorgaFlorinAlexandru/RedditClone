using System;
namespace Application.Common.Exceptions
{
	public class WrongFileFormatException : Exception
	{
		const string ERROR_MESSAGE = $"The file format is invalid.";

		public WrongFileFormatException()
			:base(ERROR_MESSAGE)
		{
		}
	}
}

