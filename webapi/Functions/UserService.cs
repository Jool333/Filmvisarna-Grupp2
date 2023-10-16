using System.Text;
using System.Security.Cryptography;
using System.Text.Json;

namespace webapi.Functions
{
    public class UserService
    {
        private static string salt = GetSalt();
        public static string HashPassword(string password)
        {
            return Convert.ToBase64String(SHA256.HashData(Encoding.UTF8.GetBytes(password + salt)));
        }

        private static string GetSalt()
        {
            var options = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            };
            string path = "Functions/secret.json";
            string salt = File.ReadAllText(path);

            // Deserialize JSON to SecretConfig object
            //var secret = JsonSerializer.Deserialize<SecretConfig>(jsonString, options);

            return salt;
        }
    }

    class SecretConfig
    {
        public string Salt { get; set; }
    }
}