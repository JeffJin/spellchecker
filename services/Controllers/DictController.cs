using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Reflection;
using System.Web.Http;

namespace spellchecker.Controllers
{
    public class DictController : ApiController
    {
        // GET api/Dict
        public IEnumerable<string> Get()
        {
            using (Stream stream = Assembly.GetExecutingAssembly()
                               .GetManifestResourceStream("spellchecker.App_Data." + "en_ca.dic"))
            using (var reader = new StreamReader(stream))
            {
                string result = reader.ReadToEnd();
                return result.Split(new [] { "\r\n" },
                            StringSplitOptions.RemoveEmptyEntries);
            }
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