import { Component, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Tarefa } from 'src/app/shared/models/tarefa';
import { MatDialog } from '@angular/material/dialog';
import { DialogCadastrarTarefa } from 'src/app/shared/dialog/cadastrar-tarefa/cadastrar-tarefa.component';
import disableScroll from 'disable-scroll';
import { CardsList } from 'src/app/shared/models/cardsList';

@Component({
  selector: 'app-kanban-panel',
  templateUrl: './kanban-panel.component.html',
  styleUrls: ['./kanban-panel.component.scss']
})
export class KanbanPanelComponent {
  public dados: Tarefa[];
  public newTarefa: Tarefa = new Tarefa();
  public textFilter: string = "";
  public cards: CardsList = new CardsList();
  public isLoading: boolean;

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  public headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
  public requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') public baseUrl: string,
    public dialog: MatDialog
    ) { };

  ngOnInit(){
    this.getDados();
  }

  filterData(){
    this.getDados();
  }

  getDados(){
    this.isLoading = true;
    this.http.post<Tarefa[]>(this.baseUrl + 'kanban/get-dados', JSON.stringify(this.textFilter), this.requestOptions).subscribe(result => {
      this.dados = result;

      this.cards.aguardando = this.dados.filter(q => q.status == 0);
      this.cards.emAndamento = this.dados.filter(q => q.status == 1);
      this.cards.pendencia = this.dados.filter(q => q.status == 2);
      this.cards.finalizado = this.dados.filter(q => q.status == 3);
      this.cards.outros = this.dados.filter(q => q.status == 4);

      setTimeout(()=>{
        this.isLoading = false;
      }, 200);
    }, error => console.error(error));
  }

  save(data: Tarefa){
    this.isLoading = true;
    this.http.post<Tarefa[]>(this.baseUrl + 'kanban/save', data, this.requestOptions).subscribe(result => {
      this.getDados();
    }, error => console.error(error));
  }

  openDialog(): void {
    disableScroll.on();
    const dialogRef = this.dialog.open(DialogCadastrarTarefa, {
      data: this.newTarefa
    });

    dialogRef.afterClosed().subscribe(result => {
      disableScroll.off();
      if(result != null){
        this.newTarefa = result;
        this.save(this.newTarefa);
      }
      this.newTarefa = new Tarefa();
    });
  }

  drop(event: CdkDragDrop<Tarefa[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      event.container.data[event.currentIndex].status = parseInt(event.container.id.charAt(event.container.id.length - 1)) > 4 ? 0 : parseInt(event.container.id.charAt(event.container.id.length - 1));
      this.save(event.container.data[event.currentIndex]);
    }
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
