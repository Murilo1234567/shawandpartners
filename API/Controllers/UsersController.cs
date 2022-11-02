using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Platform.Models;
using RestSharp;

namespace Platform.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [EnableCors("_myAllowSpecificOrigins")]
    public class UsersController
    {
        [HttpGet("{id}")]
        public ActionResult<List<User>> GetAllUsers(string id)
        {
            List<User> listUsers;
            string url = string.Format("https://api.github.com/users?per_page=16&since={0}", id);

            var restClient = new RestClient(url);
            var restRequest = new RestRequest(url, Method.Get);
            restRequest.AddHeader("Accept", "application/vnd.github+json");
            restRequest.AddHeader("Authorization", "Bearer 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");
            RestResponse restResponse = restClient.Execute(restRequest);
            listUsers = JsonConvert.DeserializeObject<List<User>>(restResponse.Content!)!;
            return listUsers;
        }

        [HttpGet("{login}")]
        public ActionResult<User> GetUserDetails(string login)
        {
            User listUsers;
            string url = string.Format("https://api.github.com/users/{0}", login);

            var restClient = new RestClient(url);
            var restRequest = new RestRequest(url, Method.Get);
            restRequest.AddHeader("Accept", "application/vnd.github+json");
            restRequest.AddHeader("Authorization", "Bearer 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");
            RestResponse restResponse = restClient.Execute(restRequest);
            listUsers = JsonConvert.DeserializeObject<User>(restResponse.Content!)!;
            return listUsers;
        }
        
        [HttpGet("{login}")]
        public ActionResult<List<Repos>> GetUserRepos(string login)
        {
            List<Repos> listRepos;
            string url = string.Format("https://api.github.com/users/{0}/repos?per_page=100", login);

            var restClient = new RestClient(url);
            var restRequest = new RestRequest(url, Method.Get);
            restRequest.AddHeader("Accept", "application/vnd.github+json");
            restRequest.AddHeader("Authorization", "Bearer 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");
            RestResponse restResponse = restClient.Execute(restRequest);
            listRepos = JsonConvert.DeserializeObject<List<Repos>>(restResponse.Content!)!;
            return listRepos;
        }
    }
}