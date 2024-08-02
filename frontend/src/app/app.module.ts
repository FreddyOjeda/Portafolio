import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './view/pages/projects/projects.component';
import { RepositoryComponent } from './view/templates/repository/repository.component';
import { ButtonComponent } from './view/components/button/button.component';
import { TableComponent } from './view/components/table/table.component';
import { CardComponent } from './view/components/card/card.component';
import { HomeComponent } from './view/pages/home/home.component';
import { ToggleComponent } from './view/components/toggle/toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    RepositoryComponent,
    ButtonComponent,
    TableComponent,
    CardComponent,
    HomeComponent,
    ToggleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }