using System;
namespace Application.Common.Models
{
	public class RequestResponse
	{
		public bool Success { get; set; }

		public string ResponseMessage { get; set; } = string.Empty;

		public int Id { get; set; }

		public Dictionary<string, string[]> Errors { get; set; } = new Dictionary<string, string[]>();


        public RequestResponse(bool success,string responseMessage)
		{
			Success = success;
			ResponseMessage = responseMessage;
		}

        public RequestResponse(bool success, string responseMessage,int id)
        {
            Success = success;
            ResponseMessage = responseMessage;
			Id = id;
        }

		public RequestResponse(string responseMessage, Dictionary<string, string[]> errors)
		{
			Success = false;
			ResponseMessage = responseMessage;
			Errors = errors;
		}
    }
}

