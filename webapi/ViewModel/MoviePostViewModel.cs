using System.ComponentModel.DataAnnotations;

namespace webapi.ViewModel
{
    public class MoviePostViewModel
    {
        [Required(ErrorMessage ="Title måste anges")]
        public string Title { get; set; }
        [Required(ErrorMessage ="Beskrivning måste anges")]
        public string Description { get; set; }
        public string AgeLimit { get; set; }
        public string ImgUrl { get; set; }
        [Required(ErrorMessage ="Trailer länk måste anges")]
        public string TrailerUrl { get; set; }
    }
}