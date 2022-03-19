import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public section: number;

  ngOnInit(): void {
    this.section = 0;
  }

  nextSection(){
    this.section++;
  }

  previousSection(){
    this.section--;
  }
}
