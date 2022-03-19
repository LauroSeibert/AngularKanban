import { Component } from '@angular/core';

@Component({
  selector: 'app-under-construciton-component',
  templateUrl: './under-construciton.component.html',
  styleUrls: ['./under-construciton.component.scss']
})
export class UnderConstructionComponent {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }
}
