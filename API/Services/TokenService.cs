using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using Domain;
using Domain.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;

namespace API.Services
{
    public class TokenService
    {
        //This object is used to access configuration settings (e.g., TokenKey) from the app settings.
        public readonly IConfiguration _config;
        private readonly UserManager<User> _userManager;

        public TokenService(IConfiguration config, UserManager<User> userManager)
        {
            _config = config;
            _userManager = userManager;
        }

        //The CreateToken method is the core of the class. It takes an AppUser object as a parameter, which likely represents the user for whom the token is being generated.
        public string CreateToken(User user)
        {
            //A list of Claim objects is created, representing the user's identity information. In this example, the user's name, name identifier, and email are added as claims.
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.UserName),
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Email, user.Email),
            };

            // Retrieve roles for the user and add each as a role claim
            var roles = _userManager.GetRolesAsync(user).Result;
            foreach (var role in roles)
            {
                claims.Add(new Claim(ClaimTypes.Role, role));
            }

            //Token preparation
            //symmetric is using same key for encryption and for the decription (should be not less than 12 chars)
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["TokenKey"]));

            //object is created, which combines the symmetric key and the signing algorithm (HMACSHA512) to generate the digital signature for the token.
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            //object, which holds information about the token, including the subject (claims identity), expiration date, and signing credentials.
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddMinutes(10),
                SigningCredentials = credentials
            };

            //Token handler
            //This handler is used to create and write the JWT.
            var tokenHandler = new JwtSecurityTokenHandler();

            //Creating token
            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token); //as string
        }

        public RefreshToken GenerateRefreshToken()
        {
            var randomNumber = new byte[32];
            using var rng = RandomNumberGenerator.Create();
            rng.GetBytes(randomNumber);
            return new RefreshToken { Token = Convert.ToBase64String(randomNumber) };
        }
    }
}
