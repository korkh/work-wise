using Domain;
using Domain.Entities;

namespace Application.Profiles
{
    public class Profile
    {
        public string UserName { get; set; }
        public string DisplayName { get; set; }
        public string Position { get; set; }
        public string Image { get; set; }
        public ICollection<Photo> Photo { get; set; }
    }
}
