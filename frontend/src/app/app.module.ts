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
import { LandingComponent } from './view/pages/landing/landing.component';
import { CountdownTimerComponent } from './view/components/countdown-timer/countdown-timer.component';
import { NavComponent } from './view/components/nav/nav.component';
import { AboutComponent } from './view/pages/about/about.component';
import { SkillsComponent } from './view/pages/skills/skills.component';
import { HistoryComponent } from './view/pages/history/history.component';
import { InfoComponent } from './view/pages/info/info.component';
import { TestComponent } from './view/pages/test/test.component';
import { FormsModule } from '@angular/forms';

import { Chart } from 'chart.js';
import { ChartComponent } from './view/components/chart/chart.component';
import { NgxTimelineModule } from 'ngx-timeline';
import { MzdTimelineModule } from 'ngx-mzd-timeline/public-api';
import { TimelineComponent } from './view/components/timeline/timeline.component';
import { ButtonTooltipComponent } from './view/components/button-tooltip/button-tooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    RepositoryComponent,
    ButtonComponent,
    TableComponent,
    CardComponent,
    HomeComponent,
    ToggleComponent,
    LandingComponent,
    CountdownTimerComponent,
    NavComponent,
    AboutComponent,
    SkillsComponent,
    HistoryComponent,
    InfoComponent,
    TestComponent,
    ChartComponent,
    TimelineComponent,
    ButtonTooltipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
