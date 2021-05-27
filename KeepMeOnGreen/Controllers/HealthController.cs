using Microsoft.AspNetCore.Mvc;

namespace KeepMeOnGreen.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HealthController : ControllerBase
    {
        [HttpGet]
        public IActionResult Status()
        {
            return Ok(new
            {
                status = "OK"
            });
        }
    }
}
