using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace spellchecker.Controllers
{
    public class DictController : ApiController
    {
        // GET api/Dict
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/Dict/word
        public bool Get(string value)
        {
            return true;
        }

        // POST api/Dict
        public void Post(string value)
        {
        }

        // PUT api/Dict/5
        public void Put(string oldValue, string newValue)
        {
        }

        // DELETE api/Dict/5
        public void Delete(string value)
        {
        }
    }
}