using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webapi.Entities
{
    public class Viewing
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public int Salon { get; set; }
        public bool[] Seats {get;set;}
        public int MovieId { get; set; }
    }
}