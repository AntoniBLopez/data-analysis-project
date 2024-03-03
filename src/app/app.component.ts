import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { SidenavService } from './services/sidenav.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSlideToggleModule, SidenavComponent, MatSidenavModule, MatIconModule, MatButtonModule],
  template: `
    <header>
      <nav>
        <button mat-button (click)="toggleSidenav()">
          <mat-icon>menu</mat-icon>
        </button>
        <img src="https://img.icons8.com/nolan/96/financial-growth-analysis.png" alt="Icono principal de la página">
        <mat-slide-toggle>Toggle me!</mat-slide-toggle>
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
  title = 'data-analysis-project';

  constructor(private sidenavService: SidenavService) { }

  toggleSidenav() {
    this.sidenavService.toggle();
  }
}
