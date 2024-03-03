import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { SidenavService } from './services/sidenav.service';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


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
        <a href="https://github.com/ToniBLopez/data-analysis-project">See code</a>
        <mat-slide-toggle>Toggle me!</mat-slide-toggle>
      </nav>
    </header>

    <app-sidenav />

    <footer>
      <img src="https://img.icons8.com/fluency/48/linkedin.png" alt="Icono para acceder a mi Linkedin">
      <img class="myWebimg" src="https://img.icons8.com/ios/50/domain--v1.png" alt="Icono para acceder a mi sitio web">
    </footer>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  title = 'data-analysis-project';

  constructor(private sidenavService: SidenavService) {}

  toggleSidenav() {
    this.sidenavService.toggle();
  }
}
