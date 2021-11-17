using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Data.SqlClient;
using ArtPortfolio.Data;
using System.Collections.Generic;

namespace ArtPortfolio.Functions
{
    public static class HomeFunctions
    {
        //Pull from Appsettings in Azure
        private static string _galleryConfig = Environment.GetEnvironmentVariable("ArtistPortfolioDBConnectionString");

        //Get Featured
        //Get Most Recent
        [FunctionName("HomeMain")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", Route = "Home")] HttpRequest req,
            ILogger log)
        {
            var homeDto = new HomeDto();
            string featuredSqlText = "Select TOP(3) * from gallery.vArtistGallery where Featured = 1;";
            string recentSqlText = "Select TOP(3) * from gallery.vArtistGallery where HideInDemo = 0 order by CreatedActual desc;";
            using (var conn = new SqlConnection(_galleryConfig))
            {
                conn.Open();
                homeDto.FeaturedGallery = await GetGallery(featuredSqlText, conn);
                homeDto.RecentGallery = await GetGallery(recentSqlText, conn);
                return new OkObjectResult(homeDto);
            }
        }

        private static async Task<List<GalleryDto>> GetGallery(string commandText, SqlConnection sqlConnection)
        {
            var resultGallery = new List<GalleryDto>();
            using (var cmd = new SqlCommand(commandText, sqlConnection))
            {
                var sqlDataReader = await cmd.ExecuteReaderAsync();
                if (sqlDataReader.HasRows)
                {
                    while (await sqlDataReader.ReadAsync())
                    {
                        resultGallery.Add(new GalleryDto()
                        {
                            Username = (string)sqlDataReader["Username"],
                            Name = (string)sqlDataReader["Name"],
                            Title = (string)sqlDataReader["Title"],
                            CDNUrl = (string)sqlDataReader["CDNUrl"],
                            CDNUrlThumbnail = (string)sqlDataReader["CDNUrlThumbnail"],
                            CreatedActual = (DateTime)sqlDataReader["CreatedActual"],
                            CreatedDate = (DateTime)sqlDataReader["CreatedDate"]
                        });
                    }
                }
                sqlDataReader.Close();
            }
            return resultGallery;
        }
    }
}

