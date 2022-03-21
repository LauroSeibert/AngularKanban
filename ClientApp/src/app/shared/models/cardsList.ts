import { Tarefa } from "./tarefa";

export class CardsList{
  aguardando: Array<Tarefa> = new Array<Tarefa>();
  emAndamento: Array<Tarefa> = new Array<Tarefa>();
  pendencia: Array<Tarefa> = new Array<Tarefa>();
  finalizado: Array<Tarefa> = new Array<Tarefa>();
  outros: Array<Tarefa> = new Array<Tarefa>();
}
