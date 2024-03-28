import { Component, Input, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { ThemeService } from './theme.service';
import { SidenavService } from './services/sidenav.service';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSlideToggleModule, SidenavComponent, MatSidenavModule, MatIconModule, MatButtonModule, MatCardModule],
  template: `
  <header>
    <nav>
      <mat-card-header>
        <button mat-button (click)="toggleSidenav()" title="Topics Menu">
          <mat-icon>{{label}}</mat-icon>
        </button>
        <img src="../assets/logo.png" alt="Icono principal de la página">
      </mat-card-header>
      <button mat-button (click)="toggleTheme()" title="Topics Menu">
        <mat-icon >{{ isDarkMode ? 'nights_stay' : 'wb_sunny' }}</mat-icon>
      </button>
    </nav>
  </header>

  <app-sidenav />

  <footer>
    <a href="https://github.com/ToniBLopez/data-analysis-project">
      <img src="https://img.icons8.com/ios-glyphs/60/github.png" alt="Icono para acceder a mi GithHub y ver el código fuente">
    </a>
    <a href="https://www.linkedin.com/in/toniblopez/">
      <img src="https://img.icons8.com/fluency/48/linkedin.png" alt="Icono para acceder a mi Linkedin">
    </a>
    <a href="https://toniblopez.github.io/">
      <img class="myWebimg" src="https://img.icons8.com/ios/100/resume.png" alt="Icono para acceder a mi sitio web">
    </a>
  </footer>
`,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isDarkMode: boolean;
  currentTheme: string = '';

  @Input()
  label: string = '';

  constructor(private sidenavService: SidenavService, private themeService: ThemeService) {
    this.isDarkMode = this.themeService.isDarkMode();
  }

  ngOnInit(): void {
    this.themeService.getCurrentTheme().subscribe(theme => {
      this.currentTheme = theme
    })
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (this.currentTheme == 'light') {
      this.themeService.setTheme('dark');
    } else {
      this.themeService.setTheme('light');
    }
    this.themeService.setDarkMode(this.isDarkMode);
  }

  toggleSidenav() {
    this.sidenavService.toggle();
  }
}
