using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.Entities
{
    public class Seat
    {
        public int Id { get; set; }
        public int SeatNbr { get; set; }
        public int RowNbr { get; set; }

        public int TheaterId { get; set; }
        [ForeignKey("TheaterId")]
        public Theater Theater { get; set; }
    }
}    