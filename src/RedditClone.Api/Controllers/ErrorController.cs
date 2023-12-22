using Microsoft.AspNetCore.Mvc;

namespace RedditClone.Api.Controllers
{
    [ApiExplorerSettings(IgnoreApi = true)]
    public class ErrorController : ApiControllerBase
    {
        [Route("/error")]
        public IActionResult HandleError() =>
            Problem();
    }
}
