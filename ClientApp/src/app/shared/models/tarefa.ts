export class Tarefa{
  id: string;
  codigo: number;
  titulo: string;
  categoria: string;
  projeto: string;
  descricao: string;
  dataPrevista: Date;
  previsto: string;
  saldo: string;
  equipe: Array<string>;
  status: TarefaStatus;
}

export enum TarefaStatus{
  Aguardando = 0,
  EmAndamento = 1,
  Pendencia = 2,
  Finalizado = 3,
  Outros = 4
}
