import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  public isExpanded: boolean = false;
  public selectedTab: number;

  constructor() { }

  ngOnInit(): void {
    this.selectedTab = 0;
  }

  toggleSidebar = () => {
    this.isExpanded = !this.isExpanded;
  }

  openSidebar = () => {
    this.isExpanded = true;
  }
}
