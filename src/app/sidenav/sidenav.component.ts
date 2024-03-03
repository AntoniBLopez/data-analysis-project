import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { SidenavService } from '../services/sidenav.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatSidenavModule, MatIconModule, MatListModule],
  animations: [
    trigger('rotate', [
      state('open', style({ transform: 'rotate(90deg)' })),
      state('close', style({ transform: 'rotate(0deg)' })),
      transition('open <=> close', animate('0.3s ease'))
    ])
  ],
  template: `
    <!-- <div #menuicon class="icon-container" (click)="sidenav.toggle()">
      <button mat-icon-button>
        <mat-icon>menu</mat-icon>
      </button>
    </div> -->
    <mat-sidenav-container hasBackdrop=false>
      <!-- <mat-sidenav #sidenav mode="side" (openedStart)="drawerOpened()" (closedStart)="drawerClosed()"> -->
      <mat-sidenav #sidenav mode="side">
        <mat-nav-list>
          <h3 class="title">Job Analysis</h3>
          <mat-list-item>
            <!-- <mat-icon matListItemIcon>menu</mat-icon> -->
            <!-- <span matListItemTitle>Pepper</span>
            <span matListItemLine>Produced by a plant</span> -->
            <span>Pepper</span>
          </mat-list-item>
          <h3 class="title">Fertility Analysis</h3>
          <mat-list-item>
            <span>Pepper</span>
          </mat-list-item>
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content>
          <h1>Main</h1>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(private sidenavService: SidenavService) {}

  ngAfterViewInit() {
    this.sidenavService.setSidenav(this.sidenav);
  }
  // @ViewChild('menuicon', { static: true }) menuicon!: ElementRef;
}
