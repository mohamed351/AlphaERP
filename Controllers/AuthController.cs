using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using RealApplication.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using System.Threading.Tasks;
using RealApplication.DTO.AuthDTOS;
using System.Text;
using Microsoft.Extensions.Configuration;

namespace RealApplication.Controllers
{
     [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly SignInManager<Employee> _signInManager;
        private readonly UserManager<Employee> _userManager;
        private readonly IConfiguration _configuration;

        public AuthController(SignInManager<Employee> signInManager, UserManager<Employee> userManager, IConfiguration configuration)
        {
            _configuration = configuration;
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] LoginDTO model)
        {
            if (ModelState.IsValid)
            {
                //Find login user by userName
                var user = await _userManager.FindByNameAsync(model.UserName);
                if (user != null)
                {
                    //if user found Check the password 
                    var result = await _signInManager.CheckPasswordSignInAsync(user, model.password, false);
                    if (result.Succeeded)
                    {
                        //create token
                        var claims = new[]
                        {
                            new Claim(JwtRegisteredClaimNames.Sub, user.Email),
                            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                            new Claim(JwtRegisteredClaimNames.UniqueName, user.Id),
                            new Claim(JwtRegisteredClaimNames.Acr, user.Id),
                             new Claim(JwtRegisteredClaimNames.Actort, user.Id)
                        };
                        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Tokens:Key"]));
                        var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
                        var token = new JwtSecurityToken(null, null,
                            claims, expires: DateTime.Now.AddDays(60),
                            signingCredentials: credentials);

                        return Ok(new
                        {
                            token = new JwtSecurityTokenHandler().WriteToken(token),
                            expiration = token.ValidTo,
                            userId = user.Id,
                            userName = user.UserName
                        });
                    }
                }
            }

            return Unauthorized();
        }


         [HttpPost]
        [Route("CreateUser")]
        public async Task<IActionResult> Create([FromBody] CreateUserDTO model)
        {
            //If the user-entered data is validated, Create the user in the database.
            if (ModelState.IsValid)
            {
                try
                {
                    var user = new Employee()
                    {
                       
                        Email = model.Email,
                        UserName = model.UserName,
                        PhoneNumber = model.PhoneNumber,
                    

                    };

                    var result = await _userManager.CreateAsync(user, model.Password);
                    //If the user is successfully created, asign them to the role of "User"
                    if (result.Succeeded)
                    {
                        await _userManager.AddToRoleAsync(user,model.Role);
                        return Ok(result);
                    }
                }
                catch (Exception ex)
                {
                    throw ex;
                }

            }

            return BadRequest("Unable to register with the entered credentials.");
        }


    }
}