using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public static class IdentityResultExtension
    {
        public static string GetIdentityErrors(this IdentityResult result)
        {
            var errors = result.Errors.Select(e => e.Description).ToArray();

            string msg = "There has been one or more errors: \n";
            foreach (var error in errors)
            {
                msg += error + "\n";
            }

            return msg;
        }
    }
}

