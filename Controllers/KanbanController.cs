using AngularKanban;
using AngularKanban.Dto;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using MongoDB.Bson;
using MongoDB.Driver.Linq;

namespace AngularKanban.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class KanbanController : ControllerBase
    {
        [HttpPost]
        [Route("get-dados")]
        public List<Tarefa> Post([FromBody] string filter)
        {
            var result = new List<Tarefa>();

            var client = new MongoClient("mongodb://localhost:27017/Database");
            var db = client.GetDatabase("Database");
            var coll = db.GetCollection<Tarefa>("Tarefas");

            if (!string.IsNullOrEmpty(filter))
                result = coll.Find(q => q.Titulo.Contains(filter)).ToList();
            else
                result = coll.Find($"{{}}").ToList();

            return result;
        }

        [HttpPost]
        [Route("save")]
        public void Save([FromBody] Tarefa data)
        {
            var result = data;
            
            var client = new MongoClient("mongodb://localhost:27017/Database");
            var db = client.GetDatabase("Database");
            var coll = db.GetCollection<Tarefa>("Tarefas");

            if (ObjectId.TryParse(data.Id, out ObjectId obj))
            {
                var filter = Builders<Tarefa>.Filter.Eq(s => s.Id, data.Id);
                var update = Builders<Tarefa>.Update.Set(q => q.Status, data.Status);
                coll.UpdateOneAsync(filter, update);
            }
            else
            {
                var last = coll.Find($"{{}}").Sort($"{{_id: -1}}").First();

                if (last != null)
                    data.Codigo = last.Codigo + 1;
                else
                    data.Codigo = 1;

                data.Status = TarefaStatus.Aguardando;

                coll.InsertOne(result);
            }

        }
    }
}