import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

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

import { ChartComponent } from './view/components/chart/chart.component';
import { NgxTimelineModule } from 'ngx-timeline';
import { MzdTimelineModule } from 'ngx-mzd-timeline/public-api';
import { TimelineComponent } from './view/components/timeline/timeline.component';
import { ButtonTooltipComponent } from './view/components/button-tooltip/button-tooltip.component';
import { ProgressGroupComponent } from './view/components/progress-group/progress-group.component';
import { SpotifyComponent } from './view/components/spotify/spotify.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimelineMovileComponent } from './view/components/timeline-movile/timeline-movile.component';
import { DateTranslatePipe } from './pipes/date-translate.pipe';
import { NavBarMovileComponent } from './view/components/nav-bar-movile/nav-bar-movile.component';
import { SimpleLoaderComponent } from './view/components/simple-loader/simple-loader.component';

// Función para cargar los archivos de traducción
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// Registrar el idioma español
registerLocaleData(localeEs);

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
    ButtonTooltipComponent,
    ProgressGroupComponent,
    SpotifyComponent,
    TimelineMovileComponent,
    DateTranslatePipe,
    NavBarMovileComponent,
    SimpleLoaderComponent
  ],
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' } // Configurar español como idioma predeterminado
  ],
  bootstrap: [AppComponent],
  exports: [
    DateTranslatePipe
  ]
})
export class AppModule { }
