using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace AngularKanban.Dto
{
    public class Tarefa
    {
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public int Codigo { get; set; }
        public string Titulo { get; set; }
        public string Categoria { get; set; }
        public string Projeto { get; set; }
        public string Descricao { get; set; }
        public DateTime DataPrevista { get; set; }
        public string Previsto { get; set; }
        public string Saldo { get; set; }
        public List<string> Equipe { get; set; }
        public TarefaStatus Status { get; set; }
    }

    public enum TarefaStatus
    {
        Aguardando = 0,
        EmAndamento = 1,
        Pendencia = 2,
        Finalizado = 3,
        Outros = 4
    }
}
