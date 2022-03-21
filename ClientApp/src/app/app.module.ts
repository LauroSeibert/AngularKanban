import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AngularMaterialModule } from './material.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';
import { KanbanPanelComponent } from './components/kanban-panel/kanban-panel.component';
import { UnderConstructionComponent } from './components/under-construction/under-construction';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogCadastrarTarefa } from './shared/dialog/cadastrar-tarefa/cadastrar-tarefa.component';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { CardComponent } from './shared/components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    CounterComponent,
    KanbanPanelComponent,
    UnderConstructionComponent,
    DialogCadastrarTarefa,
    CardComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
