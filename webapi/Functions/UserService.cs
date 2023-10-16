using System.Text;
using System.Security.Cryptography;
using System.Text.Json;

namespace webapi.Functions
{
    public class UserService
    {
        private string salt = GetSalt();
        public static string HashPassword(string password)
        {
            return Convert.ToBase64String(SHA256.HashData(Encoding.UTF8.GetBytes(password + salt)));
        }

        private static string GetSalt()
        {
            string path = "./secret.json";
            string jsonString = File.ReadAllText(path);

            // Deserialize JSON to SecretConfig object
            SecretConfig secret = JsonSerializer.Deserialize<SecretConfig>(jsonString);

            // Extract the salt value from the JSON object
            return secret.Salt;
        }
    }

    class SecretConfig
    {
        public string Salt { get; set; }
    }
}