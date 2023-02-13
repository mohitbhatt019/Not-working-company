using Company_Project.Models;
using Company_Project.Repository.IRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Company_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticateController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly IConfiguration _configuration;
        private readonly IAuthenticateRepository _authenticateRepository;

        public AuthenticateController(
            UserManager<ApplicationUser> userManager,
            RoleManager<IdentityRole> roleManager,
            IConfiguration configuration,
            IAuthenticateRepository authenticateRepository)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _configuration = configuration;
            _authenticateRepository = authenticateRepository;
        }
        [HttpPost]
        [Route("Register")]
        public async Task<IActionResult> Register([FromBody] RegisterModel registerModel)
        {
            if (!ModelState.IsValid)
                return BadRequest();
            var userExists = await _authenticateRepository.IsUnique(registerModel.Username);
           if (userExists == null) return BadRequest(userExists);
            var user = new ApplicationUser
            {
                UserName = registerModel.Username,
                Email = registerModel.Email,
                PasswordHash=registerModel.Password
            };
            var result = await _authenticateRepository.RegisterUser(user);
            if (!result) return StatusCode(StatusCodes.Status500InternalServerError);
            return Ok(new { Message = "Register successfully!!!" });
        }

        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult>Login(LoginModel loginModel)
        {
            if(await _authenticateRepository.IsUnique(loginModel.Username)) 
                return BadRequest(new { Message = "Please Register first then login!!!" });
            var verify = await _authenticateRepository.AuthenticateUser(loginModel.Username, loginModel.Password);
            if (verify == null) return Unauthorized();
            return Ok(new { Message = "Login successfully!!!" });

        }

    }
}
