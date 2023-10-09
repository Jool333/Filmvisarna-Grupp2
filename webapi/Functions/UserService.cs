namespace webapi.Functions
{
    public class UserService
    {
        public string HashPassword(string password)
        {
            string salt = "";

            // Hash the password with the salt
            string hashedPassword = "";

        return hashedPassword;
        }

        public bool VerifyPassword(string enteredPassword, string hashedPasswordFromDatabase)
        {
            return (enteredPassword==hashedPasswordFromDatabase);
        }
    }
}