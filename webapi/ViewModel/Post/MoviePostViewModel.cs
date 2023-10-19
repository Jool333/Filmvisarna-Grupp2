using System.ComponentModel.DataAnnotations;

namespace webapi.ViewModel.Post
{
    public class MoviePostViewModel
    {
        [Required(ErrorMessage = "Title måste anges")]
        public string Title { get; set; }
        public string Description { get; set; }
        public string AgeLimit { get; set; }
        public string ImgUrl { get; set; }
        [Required(ErrorMessage = "Trailer länk måste anges")]
        public string TrailerUrl { get; set; }
    }
}