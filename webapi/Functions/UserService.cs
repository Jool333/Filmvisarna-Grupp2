using System.Text;

namespace webapi.Entities
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

    // Funktion för att skapa uniqt bokingsnummer. 
    public class ReservationSystem
    {
    private Random random = new Random();

    public string GenerateReservationNumber(int length = 6)
    {
        const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        StringBuilder reservationNumber = new StringBuilder();

        for (int i = 0; i < length; i++)
        {
            int index = random.Next(chars.Length);
            reservationNumber.Append(chars[index]);
        }

        return reservationNumber.ToString();
    }
    }
    }
}