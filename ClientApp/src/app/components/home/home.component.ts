import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public timeout: boolean;
  public section: number;
  public auxSection: number;

  ngOnInit(): void {
    this.section = 1;
    this.auxSection = this.section;
  }

  changeSection(i: number){
    if(this.timeout)
      return;

    if(this.section < i){
      this.section = i + 1;
    } else if(this.section > i){
      this.section = i;
    } else if(this.section == 3){
      return;
    } else{
      this.section++;
    }

    this.closeSection();
  }

  closeSection(){
    this.timeout = true;
    setTimeout(()=>{
      this.auxSection = this.section;
      this.timeout = false;
    }, 400);
  }
}
