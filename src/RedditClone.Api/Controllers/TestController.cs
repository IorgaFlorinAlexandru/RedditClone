using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RedditClone.Domain.Entities;

namespace RedditClone.Api.Controllers
{
    public class TestController : ApiControllerBase
    {
        [HttpGet("getTextT")]
        public IActionResult GetText()
        {
            var postTest = new Post {
                Title = "Test Post",
                Content = "Content"
            };
            return Ok(postTest);
        }

        [HttpGet("throwError")]
        public int ThrowError()
        {
            throw new Exception("Test Exception Thrown");
        }
    }
}
