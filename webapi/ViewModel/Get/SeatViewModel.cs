namespace webapi.ViewModel.Get
{
    public class SeatViewModel
    {
        public int Id { get; set; }
        public int SeatNumber { get; set; }
        public int RowNumber { get; set; }
        public bool IsTaken { get; set; }
    }
}