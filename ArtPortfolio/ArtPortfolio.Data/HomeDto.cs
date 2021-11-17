using System;
using System.Collections.Generic;
using System.Text;

namespace ArtPortfolio.Data
{
    public class HomeDto
    {
        public List<GalleryDto> FeaturedGallery { get; set; }
        public List<GalleryDto> RecentGallery { get; set; }

    }
}
