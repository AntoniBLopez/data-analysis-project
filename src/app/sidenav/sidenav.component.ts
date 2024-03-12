import { ThemeService } from '../theme.service'
import { Component, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { SidenavService } from '../services/sidenav.service';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatSidenavModule, MatIconModule, MatListModule, CommonModule],
  template: `
    <mat-sidenav-container [ngClass]="{ 'dark-theme': isDarkTheme }" hasBackdrop=false>
      <mat-sidenav #sidenav mode="side" [ngClass]="{ 'dark-theme': isDarkTheme }">
        <mat-nav-list>
          <h3 class="title">Job Analysis</h3>
          <mat-list-item>
            <!-- <mat-icon matListItemIcon>menu</mat-icon> -->
            <!-- <span matListItemTitle>Pepper</span>
            <span matListItemLine>Produced by a plant</span> -->
            <span>Fertility Rate</span>
          </mat-list-item>
          <h3 class="title">Fertility Analysis</h3>
          <mat-list-item>
            <span>Pepper</span>
          </mat-list-item>
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content>
        usar tabs para mostrar
          <h1>Main</h1>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isDarkTheme: boolean = false;

  constructor(private sidenavService: SidenavService, private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.getCurrentTheme().subscribe(theme => {
      this.isDarkTheme = theme === 'dark';
    });
  }
  ngAfterViewInit() {
    this.sidenavService.setSidenav(this.sidenav);
  }
  // @ViewChild('menuicon', { static: true }) menuicon!: ElementRef;
}
