import { Component, Input } from '@angular/core';
import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base';
import { Tarefa } from '../../models/tarefa';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() data: Tarefa;

  getTimeStatus(){
    var today = new Date();
    var result: TimeStatus = {text: "EM DIA", color: "green"};
    return result;
  }

  getEquipeMember(item: string){
    var matches = item.match(/\b(\w)/g);
    return matches?.join('').toUpperCase();
  }
}

interface TimeStatus{
  text: string;
  color: string;
}
