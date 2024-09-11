import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme: string = 'dark';
  private themeSubject = new BehaviorSubject<string>(this.theme);

  theme$ = this.themeSubject.asObservable();

  constructor() {
    this.loadTheme();
  }

  private loadTheme(): void {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.theme = savedTheme;
      this.applyTheme();
    }
  }

  private applyTheme(): void {
    document.documentElement.setAttribute('data-theme', this.theme);
    this.themeSubject.next(this.theme); // Emite el cambio de tema
  }

  toggleTheme(): void {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    this.applyTheme();
    localStorage.setItem('theme', this.theme);
  }
}
