using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace RedditClone.Api.Controllers
{
    [Route("api/reddit/v1/[controller]")]
    [ApiController]
    public abstract class ApiControllerBase : Controller
    {
        private ISender _mediator = null!;
        protected ISender Mediator => _mediator ??= HttpContext.RequestServices.GetRequiredService<ISender>();
    }
}
