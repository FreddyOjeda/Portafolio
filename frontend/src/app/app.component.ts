import { Component } from '@angular/core';
import { ThemeService } from './services/config/ThemeService.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ElingeWeb';
  language : boolean = false
  items: any[]= [
    { label: 'NAV.ABOUT_ME', value: 'section1' },
    { label: 'NAV.SKILLS', value: 'section2' },
    { label: 'NAV.HISTORY', value: 'section3' },
    { label: 'NAV.PROJECTS', value: 'section4' },
    { label: 'NAV.TALK_ME', value: 'section5' }
  ]

  constructor(
    private themeService: ThemeService,
    private translate: TranslateService
  ) { 
    this.translate.setDefaultLang('en');
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  changeLanguage(event: string) {
    this.language = event === 'es' ? true : false
    this.translate.use(event);
  }
  
}
