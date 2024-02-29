import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatSidenavModule, MatIconModule, MatListModule],
  template: `
    <div #menuicon class="icon-container" (click)="sidenav.toggle()" (click)="closeIcon()">
      <button mat-icon-button>
        <mat-icon fontIcon="menu" />
      </button>
    </div>
    <mat-sidenav-container hasBackdrop=true>
      <mat-sidenav #sidenav mode="side" opened>
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
  @ViewChild('menuicon', { static: true }) menuicon!: ElementRef;

  closeIcon() {
    if(this.sidenav.opened) {
      this.menuicon.nativeElement.style.left = '120px'
    } else {
      this.menuicon.nativeElement.style.left = '0'
    }
  }
}
