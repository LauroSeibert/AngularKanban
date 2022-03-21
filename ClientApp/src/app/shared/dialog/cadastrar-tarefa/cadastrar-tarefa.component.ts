import { Component, Inject } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import {MatSnackBar} from '@angular/material/snack-bar';
import { Tarefa } from "../../models/tarefa";

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: 'cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.scss']
})
export class DialogCadastrarTarefa {
  constructor(
    public dialogRef: MatDialogRef<DialogCadastrarTarefa>,
    @Inject(MAT_DIALOG_DATA) public data: Tarefa,
    private _snackBar: MatSnackBar
  ) {}

  public saveAttempted: boolean;
  public form = new FormGroup({
    titulo: new FormControl('', [Validators.required]),
    descricao: new FormControl('', [Validators.required]),
    projeto: new FormControl('', [Validators.required]),
    categoria: new FormControl('', [Validators.required]),
    dataPrevista: new FormControl('', [Validators.required]),
    previsto: new FormControl('00:00'),
    saldo: new FormControl({value: '00:00', disabled: true }),
    equipe: new FormControl('')
  });
  public categorias: string[] = ['Desenvolvimento', 'UX | UI', 'Financeiro'];

  ngOnInit(){
    this.data.id = "";
    this.data.categoria = "";
  }

  cancel(): void {
    this.dialogRef.close();
  }

  save(){
    this.saveAttempted = true;

    if(this.form.valid){
      this.data.titulo = this.form.get('titulo')?.value;
      this.data.descricao = this.form.get('descricao')?.value;
      this.data.projeto = this.form.get('projeto')?.value;
      this.data.categoria = this.form.get('categoria')?.value;
      this.data.dataPrevista = this.form.get('dataPrevista')?.value;
      this.data.previsto = this.form.get('previsto')?.value;
      this.data.saldo = this.form.get('saldo')?.value;
      this.data.equipe = this.getEquipe(this.form.get('equipe')?.value);

      this.dialogRef.close(this.data);
    }
  }

  getEquipe(item: string){
    var result = item.replace(/\s+/g,' ').split(",").filter(q => q != " ").map(q => q.trim());
    return result;
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, "Ok", {duration: 5000});
  }
}
