import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeServiceService {
  private theme = 'theme';
  constructor() {
    this.theme=localStorage.getItem('theme')||'light';
    this.applyTheme(this.theme);
  }

  setTheme(theme: string): void {
    this.theme = theme;
    localStorage.setItem('theme', theme);
    this.applyTheme(theme);
  }
  getTheme():string{
    return this.theme;
  }
  applyTheme(theme:string){
    document.documentElement.setAttribute('data-theme',theme);
  }
}
