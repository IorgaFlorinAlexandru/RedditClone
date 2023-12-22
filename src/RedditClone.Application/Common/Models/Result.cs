using System.Net;

namespace RedditClone.Application.Common.Models
{
    public class Result<T>
    {
        public HttpStatusCode StatusCode { get; set; }
        public T? Data { get; set; }
        public Dictionary<string, string[]> Errors { get; set; } = new Dictionary<string, string[]>();
        public Result(HttpStatusCode statusCode, T? data, Dictionary<string, string[]>? errors = null)
        {
            StatusCode = statusCode;
            Data = data;
            Errors = errors ?? new();
        }

        public static Result<T> Success(T? data) 
        {
            return new(HttpStatusCode.OK,data);
        }
    }
}
