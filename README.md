# AngularKanban

Protótipo de quadro Kanban com **ASP.NET Core**, **Angular** e **MongoDB**. As tarefas são cadastradas, filtradas e movimentadas entre colunas por arrastar e soltar, e o status é salvo no banco.

Projeto desenvolvido como teste técnico para um processo seletivo.

## Demonstração

**Navegação entre as páginas**

![Navegação entre as páginas](https://user-images.githubusercontent.com/48037091/159195244-276b963b-c873-430e-a0b2-ae1de532cc37.gif)

**Fluxo dos cards**

![Fluxo dos cards](https://user-images.githubusercontent.com/48037091/159195273-92a41cbe-6775-4a4c-b955-52ee873f7ba7.gif)

**Cadastro de tarefa**

![Cadastro de tarefa](https://user-images.githubusercontent.com/48037091/159195381-9631f807-a320-41b8-9ad1-367ca1e5b549.gif)

## Funcionalidades

- Quadro com as colunas **Aguardando**, **Em andamento**, **Pendência**, **Finalizado** e **Outros**, cada uma com o contador de cards.
- Arrastar e soltar cards entre colunas, com o novo status gravado no MongoDB.
- Cadastro de tarefa com título, descrição, projeto, categoria, data prevista, horas previstas, saldo e equipe.
- Busca por título.
- Menu lateral com as demais páginas ainda em construção.

## Tecnologias

| Camada | Tecnologia |
| --- | --- |
| Back-end | ASP.NET Core (.NET 6) |
| Front-end | Angular 13, Angular Material e CDK (drag and drop), Bootstrap |
| Banco de dados | MongoDB (`MongoDB.Driver` 2.15) |

## Como executar

**Pré-requisitos:** [.NET 6 SDK](https://dotnet.microsoft.com/download/dotnet/6.0), [Node.js](https://nodejs.org/) e uma instância do [MongoDB](https://www.mongodb.com/try/download/community) rodando em `localhost:27017`.

```bash
git clone https://github.com/LauroSeibert/AngularKanban.git
cd AngularKanban
dotnet run
```

Em modo Debug, o projeto roda `npm install` na primeira execução (se `ClientApp/node_modules` não existir) e sobe o Angular (`npm start`, porta 44477) junto com a API. Acesse **http://localhost:5236**.

O banco `Database` e a coleção `Tarefas` são criados pelo MongoDB na primeira gravação.

> A string de conexão está fixa em `Controllers/KanbanController.cs` (`mongodb://localhost:27017/Database`). Para usar outro servidor, altere nesse arquivo.

## API

| Método | Rota | Descrição |
| --- | --- | --- |
| `POST` | `/kanban/get-dados` | Lista as tarefas. O corpo é o texto do filtro por título (vazio retorna todas). |
| `POST` | `/kanban/save` | Cria uma tarefa nova (status inicial *Aguardando*) ou atualiza o status de uma existente. |

## Estrutura

```
AngularKanban/
├── Controllers/   # KanbanController (API)
├── Dto/           # Tarefa e TarefaStatus
└── ClientApp/     # Aplicação Angular
    └── src/app/
        ├── components/   # kanban-panel, sidebar, home
        └── shared/       # card e diálogo de cadastro de tarefa
```
