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
using ArtPortfolio.Functions.Gallery.Models;
using System.Collections.Generic;

namespace ArtPortfolio.Functions.Gallery
{
    public static class GalleryFunctions
    {
        //Pull from Appsettings in Azure
        private static string _galleryConfig = Environment.GetEnvironmentVariable("ArtistPortfolioDBConnectionString");

        [FunctionName("GalleryMain")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", Route = "Gallery")] HttpRequest req, ILogger log)
        {
            string sqlText = "Select * from gallery.vArtistGalleryDemo;";
            //add record to image gallery db
            using (var conn = new SqlConnection(_galleryConfig))
            {
                conn.Open();
                using (var cmd = new SqlCommand(sqlText, conn))
                {
                    Console.WriteLine(cmd.CommandText);
                    var sqlDataReader = await cmd.ExecuteReaderAsync();
                    var artistGalleryList = new List<ArtistGallery>();
                    if (sqlDataReader.HasRows)
                    {
                        while (await sqlDataReader.ReadAsync())
                        {
                            artistGalleryList.Add(new ArtistGallery()
                            {
                                ID = (Guid)sqlDataReader["ID"],
                                ArtistID = (Guid)sqlDataReader["ArtistID"],
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



            return new OkResult();
        }
    }
}
