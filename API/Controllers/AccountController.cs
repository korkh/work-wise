using System.Security.Claims;
using System.Text;
using API.DTO;
using API.Services;
using Domain;
using Infrastructure.Email;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    //[AllowAnonymous] //This will allow to avoid authentication created by policy in program.cs but in some part we will require [Authorize]
    //so we commenting that on that level and will populate for each particular request we actually need
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private readonly TokenService _tokenService;
        private readonly IConfiguration _config;
        private readonly HttpClient _httpClient;
        private readonly SignInManager<User> _signInManager;
        private readonly EmailSender _emailSender;

        public AccountController(
            UserManager<User> userManager,
            SignInManager<User> signInManager,
            TokenService tokenService,
            IConfiguration config,
            EmailSender emailSender
        )
        {
            _emailSender = emailSender;
            _signInManager = signInManager;
            _config = config;
            _tokenService = tokenService;
            _userManager = userManager;
            _httpClient = new HttpClient
            {
                BaseAddress = new System.Uri("https://graph.facebook.com")
            };
        }

        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            var user = await _userManager
                .Users.Include(p => p.Photos)
                .FirstOrDefaultAsync(u => u.Email == loginDto.Email);

            if (user == null)
                return Unauthorized("Invalid Email");

            //Allow to test user Login without emailConfirmation
            if (user.UserName == "bob")
                user.EmailConfirmed = true;

            if (!user.EmailConfirmed)
                return Unauthorized("Email not verified");

            var result = await _signInManager.CheckPasswordSignInAsync(
                user,
                loginDto.Password,
                false
            );

            if (result.Succeeded)
            {
                await SetRefreshToken(user);
                return CreateUserObject(user);
            }
            return Unauthorized("Invalid password");
        }

        [AllowAnonymous]
        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
        {
            //Check for UserName duplicates
            if (await _userManager.Users.AnyAsync(x => x.UserName == registerDto.UserName))
            {
                ModelState.AddModelError("username", "Username is already in use");
                return ValidationProblem();
            }

            //Check for email duplicates
            if (await _userManager.Users.AnyAsync(x => x.Email == registerDto.Email))
            {
                ModelState.AddModelError("email", "Email is already in use");
                return ValidationProblem();
            }

            var user = new User
            {
                DisplayName = registerDto.DisplayName,
                Email = registerDto.Email,
                UserName = registerDto.UserName
            };

            //Use userManager to create that user
            var result = await _userManager.CreateAsync(user, registerDto.Password);

            if (!result.Succeeded)
                return BadRequest("Problem registering user");
            //checking from where request came from
            var origin = Request.Headers["origin"];
            var token = await _userManager.GenerateEmailConfirmationTokenAsync(user);
            token = WebEncoders.Base64UrlEncode(Encoding.UTF8.GetBytes(token));

            var verifyUrl = $"{origin}/account/verifyEmail?token={token}&email={user.Email}";
            var message =
                $"<p>Please cleck the below link to verify your email address:</p><p><a href='{verifyUrl}'>Click to verify Email</a></p>";

            await _emailSender.SendEmailAsync(user.Email, "Please verify email", message);

            return Ok("Registration success - please verify email!");
        }

        [AllowAnonymous]
        [HttpPost("verifyEmail")]
        public async Task<IActionResult> VerifyEmail(string token, string email)
        {
            var user = await _userManager.FindByEmailAsync(email);
            if (user == null)
                return Unauthorized();

            var decodedTokenBytes = WebEncoders.Base64UrlDecode(token);
            var decodedToken = Encoding.UTF8.GetString(decodedTokenBytes);
            var result = await _userManager.ConfirmEmailAsync(user, decodedToken);

            if (!result.Succeeded)
                return BadRequest("Could not verify email address");

            return Ok("Email confirmed - you can login now");
        }

        //If client not get link to verifyEmail
        [AllowAnonymous]
        [HttpGet("resendEmailConfirmationLink")]
        public async Task<IActionResult> ResendEmailConfirmationLink(string email)
        {
            var user = await _userManager.FindByEmailAsync(email);
            if (user == null)
                return Unauthorized();
            //checking from where request came from
            var origin = Request.Headers["origin"];
            var token = await _userManager.GenerateEmailConfirmationTokenAsync(user);
            token = WebEncoders.Base64UrlEncode(Encoding.UTF8.GetBytes(token));

            var verifyUrl = $"{origin}/account/verifyEmail?token={token}&email={user.Email}";
            var message =
                $"<p>Please cleck the below link to verify your email address:</p><p><a href='{verifyUrl}'>Click to verify Email</a></p>";

            await _emailSender.SendEmailAsync(user.Email, "Please verify email", message);

            return Ok("Email verification link resent");
        }

        [Authorize] //if we have [AllowAnonymous] Authorize will be ignored
        [HttpGet]
        public async Task<ActionResult<UserDto>> GetCurrentUser()
        {
            var user = await _userManager
                .Users.Include(p => p.Photos)
                .FirstOrDefaultAsync(x => x.Email == User.FindFirstValue(ClaimTypes.Email));

            await SetRefreshToken(user); //not required here but it can be
            return CreateUserObject(user);
        }

        // [AllowAnonymous]
        // [HttpPost("fbLogin")]
        // public async Task<ActionResult<UserDto>> FacebookLogin(string accessToken)
        // {
        //     var fbVerifyKeys = _config["Facebook:AppId"] + "|" + _config["Facebook:AppSecret"];

        //     var verifyToken = await _httpClient.GetAsync($"debug_token?input_token={accessToken}&access_token={fbVerifyKeys}");

        //     if (!verifyToken.IsSuccessStatusCode) return Unauthorized();

        //     var fbUrl = $"me?access_token={accessToken}&fields=name,email,picture.width(100).height(100)";

        //     var response = await _httpClient.GetAsync(fbUrl);

        //     if (!response.IsSuccessStatusCode) return Unauthorized();

        //     // var fbInfo = JsonConvert.DeserializeObject<dynamic>(await response.Content.ReadAsStringAsync());
        //     var fbInfo = await _httpClient.GetFromJsonAsync<FacebookDto>(fbUrl);

        //     //var username = fbInfo.Name;

        //     //var user = await _userManager.Users.Include(p => p.Photos).FirstOrDefaultAsync(x => x.Email == fbInfo.Email);
        //     var user = await _userManager.Users.Include(p => p.Photos).FirstOrDefaultAsync(x => x.Email == fbInfo.Email);

        //     if (user != null) return CreateUserObject(user);

        //     user = new User
        //     {
        //         DisplayName = fbInfo.Name,
        //         Email = fbInfo.Email,
        //         UserName = fbInfo.Email,
        //         Photos = new List<Photo>
        //         {
        //             new Photo
        //             {
        //                 Id = "fb_" + fbInfo.Id,
        //                 Url = fbInfo.Picture.Data.Url,
        //                 IsMain = true
        //             }
        //         },
        //         //EmailConfirmed = true
        //     };

        //     var result = await _userManager.CreateAsync(user);

        //     if (!result.Succeeded) return BadRequest("Problem creating user account");

        //     //await SetRefreshToken(user);
        //     await SetRefreshToken(user);
        //     return CreateUserObject(user);
        // }

        [Authorize]
        [HttpPost("refreshToken")]
        public async Task<ActionResult<UserDto>> RefreshToken()
        {
            var refreshTokken = Request.Cookies["refreshToken"];
            var user = await _userManager
                .Users.Include(r => r.RefreshTokens)
                .Include(p => p.Photos)
                .FirstOrDefaultAsync(x => x.UserName == User.FindFirstValue(ClaimTypes.Name));

            //if no user
            if (user == null)
                return Unauthorized();

            var oldToken = user.RefreshTokens.SingleOrDefault(x => x.Token == refreshTokken);

            if (oldToken != null && !oldToken.IsActive)
                return Unauthorized();

            return CreateUserObject(user);
        }

        private async Task SetRefreshToken(User user)
        {
            var refreshToken = _tokenService.GenerateRefreshToken();
            user.RefreshTokens.Add(refreshToken);
            await _userManager.UpdateAsync(user); //saving to database

            //add cookies
            var cookieOptions = new CookieOptions
            {
                HttpOnly = true, //Our refresh token inaccessible via JavaScript
                Expires = DateTime.UtcNow.AddDays(7)
            };

            Response.Cookies.Append("refreshToken", refreshToken.Token, cookieOptions);
        }

        //Method to create new user
        private UserDto CreateUserObject(User user)
        {
            return new UserDto
            {
                DisplayName = user.DisplayName,
                Image = user?.Photos?.FirstOrDefault(x => x.IsMain)?.Url, //? is used to return null if no objects found and keeps us save from errors
                Token = _tokenService.CreateToken(user),
                UserName = user.UserName,
                //Name = user.DisplayName //required for facebook login, when getting response
            };
        }
    }
}
