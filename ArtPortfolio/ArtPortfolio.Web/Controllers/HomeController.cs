using ArtPortfolio.Data;
using ArtPortfolio.Web.Configurations;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace ArtistPortfolio.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly AzureApiConfiguration _azureApiConfiguration;
        public HomeController(IOptions<AzureApiConfiguration> azureApiConfig)
        {
            _azureApiConfiguration = azureApiConfig.Value;
        }

        // GET: api/<HomeController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var homeDto = new HomeDto();
            using (var httpClient = new HttpClient())
            {
                var request = new HttpRequestMessage(HttpMethod.Get, $"{_azureApiConfiguration.ApiUrl}/api/home");
                request.Headers.Add("x-functions-key", _azureApiConfiguration.ApiKey);
                var response = await httpClient.SendAsync(request);
                response.EnsureSuccessStatusCode();
                var contentResult = await response.Content.ReadAsStringAsync();
                homeDto = JsonConvert.DeserializeObject<HomeDto>(contentResult);
            }

            return new OkObjectResult(homeDto);
        }
    }
}
