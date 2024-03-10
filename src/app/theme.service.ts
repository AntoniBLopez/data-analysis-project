import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentThemeSubject: BehaviorSubject<string> = new BehaviorSubject<string>('light');
  private darkMode = false;

  isDarkMode() {
    return this.darkMode;
  }

  setDarkMode(isDarkMode: boolean) {
    this.darkMode = isDarkMode;
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }

  getCurrentTheme(): Observable<string> {
    return this.currentThemeSubject.asObservable();
  }
  setTheme(theme: string): void {
    this.currentThemeSubject.next(theme);
  }
  // constructor() { }
}
