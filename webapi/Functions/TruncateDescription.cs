namespace webapi.Functions
{
    public class TruncateDescription
    {
        public static string TruncDesc(string desc)
        {
            int maxLenght = 300;

            if (desc.Length > maxLenght)
            {
                int lastPeriodIndex = desc.LastIndexOf(".", maxLenght - 1);
                if (lastPeriodIndex != -1)
                    return desc[..(lastPeriodIndex + 1)];
                return desc[..maxLenght];
            }
            return desc;
        }
    }
}