using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.Entities
{
    public class LoggedIn
    {
        public int id { get; set; }
        public string SessionToken { get; set; }
        public int UserId { get; set; }
        [ForeignKey("UserId")]
        public User User { get; set; }
    }
}