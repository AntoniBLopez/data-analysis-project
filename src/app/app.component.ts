import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SidenavComponent } from './sidenav/sidenav.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSlideToggleModule, SidenavComponent],
  template: `
    <header>
      <nav>
        <img src="https://img.icons8.com/nolan/96/financial-growth-analysis.png" alt="Icono principal de la página">
        <div class="options">
          <select name="JobAnalisis" id="jobAnalysisId">
            <option value="jobAnalysis" selected="selected" hidden>Job Analysis</option>
            <option value="Software">Software</option>
          </select>
          <select name="FertilityAnalysis" id="fertilityAnalysis">
            <option value="fertilityAnalysis" selected="selected" hidden>Fertility Analysis</option>
            <option value="Mundial">De todo el mundo</option>
          </select>
        </div>
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
  title = 'data-analysis-project';
}
