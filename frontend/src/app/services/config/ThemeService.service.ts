import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme: string = 'dark';

  constructor() {
    localStorage.setItem('theme', this.theme);
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
  }

  toggleTheme(): void {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    this.applyTheme();
    localStorage.setItem('theme', this.theme);
  }
}
