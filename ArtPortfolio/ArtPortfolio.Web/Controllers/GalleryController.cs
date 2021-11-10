using ArtPortfolio.Data;
using ArtPortfolio.Web.Configurations;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ArtistPortfolio.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class GalleryController : ControllerBase
    {
        private readonly AzureApiConfiguration _azureApiConfiguration;
        public GalleryController(IOptions<AzureApiConfiguration> azureApiConfig)
        {
            _azureApiConfiguration = azureApiConfig.Value;
        }
        //inject gallery service 
        // GET: api/<GalleryController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var galleryItems = new List<GalleryDto>();
            using (var httpClient = new HttpClient())
            {
                var request = new HttpRequestMessage(HttpMethod.Get, $"{_azureApiConfiguration.ApiUrl}/api/gallery");
                request.Headers.Add("x-functions-key", _azureApiConfiguration.ApiKey);
                var response = await httpClient.SendAsync(request);
                response.EnsureSuccessStatusCode();
                var contentResult = await response.Content.ReadAsStringAsync();
                galleryItems = JsonConvert.DeserializeObject<List<GalleryDto>>(contentResult);
            }

            return new OkObjectResult(galleryItems);
        }

        // GET api/<GalleryController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<GalleryController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<GalleryController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<GalleryController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
