import { Component } from '@angular/core';

@Component({
  selector: 'app-under-construciton-component',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.scss']
})
export class UnderConstructionComponent {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }
}
