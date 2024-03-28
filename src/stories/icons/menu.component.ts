import { Component, Input } from '@angular/core';
import { ThemeService } from '../../app/theme.service';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
// Replace your-renderer with the renderer you are using (e.g., react, vue3, angular, etc.)
import { Preview } from '@storybook/angular';

const preview: Preview = {
  // The default value of the theme arg for all stories
  args: { label: 'menu' },
};

export default preview;

@Component({
  selector: 'menu-icon-component',
  standalone: true,
  imports: [RouterOutlet, MatSlideToggleModule, MatIconModule, MatButtonModule, MatCardModule],
  template: `
    <button mat-icon-button title="Topics Menu" aria-label="Example icon button">
      <mat-icon>{{label}}</mat-icon>
    </button>
  `,
  styleUrl: './menu.component.scss'
})
export class MenuIconComponent {
  isDarkMode: boolean;
  currentTheme: string = '';

  @Input()
  label: string = '';

  constructor(private themeService: ThemeService) {
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
}
