namespace webapi.Functions
{
    public static class BookingNbrGenerator
    {
        private static Random random = new Random();
        private const string letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        private const string nbrs = "0123456789";

        public static string GenerateReservationNbr()
        {
            string reservationNbr ="";
            
            for (int i = 0; i < 3; i++)
            {
                reservationNbr += letters[random.Next(letters.Length)];
            }
            for (int i = 0; i < 3; i++)
            {
                reservationNbr += nbrs[random.Next(nbrs.Length)];
            }

            return reservationNbr;

        }
    }
}