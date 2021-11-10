using System;

namespace ArtPortfolio.Data
{
    public class ArtistGallery
    {
        public string Username { get; set; }
        public string Name { get; set; }
        public Guid ID { get; set; }
        public Guid ArtistID { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string CDNUrl { get; set; }
        public string CDNUrlThumbnail { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime CreatedActual { get; set; }
    }
}
