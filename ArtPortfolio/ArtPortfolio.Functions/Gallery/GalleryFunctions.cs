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
using System.Collections.Generic;
using ArtPortfolio.Data;
namespace ArtPortfolio.Functions.Gallery
{
    public static class GalleryFunctions
    {
        //Pull from Appsettings in Azure
        private static string _galleryConfig = Environment.GetEnvironmentVariable("ArtistPortfolioDBConnectionString");

        //Get Featured
        //Get Most Recent

        //Requires view tracking / analytics
        //Get Most Viewed


        [FunctionName("GalleryMain")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", Route = "Gallery")] HttpRequest req, ILogger log)
        {
            string sqlText = "Select TOP(30) * from gallery.vArtistGallery where HideInDemo = 0 order by CreatedActual desc;";
            using (var conn = new SqlConnection(_galleryConfig))
            {
                conn.Open();
                using (var cmd = new SqlCommand(sqlText, conn))
                {
                    Console.WriteLine(cmd.CommandText);
                    var sqlDataReader = await cmd.ExecuteReaderAsync();
                    var artistGalleryList = new List<GalleryDto>();
                    if (sqlDataReader.HasRows)
                    {
                        while (await sqlDataReader.ReadAsync())
                        {
                            artistGalleryList.Add(new GalleryDto()
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

                    return new OkObjectResult(artistGalleryList);
                }
            }
        }
    }
}
