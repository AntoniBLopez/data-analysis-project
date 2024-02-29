import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatSidenavModule, MatIconModule, MatListModule],
  template: `
    <button mat-icon-button (click)="sidenav.toggle();">
      <mat-icon fontIcon="menu" />
    </button>
    <mat-sidenav-container hasBackdrop=true>
      <mat-sidenav #sidenav mode="side" opened>
        <mat-nav-list>
          <h3 class="sidenav-title">Job Analysis</h3>
          <mat-list-item>
            <mat-icon matListItemIcon>menu</mat-icon>
            <!-- <span matListItemIcon>Pepper</span> -->
            <span matListItemTitle>Pepper</span>
            <span matListItemLine>Produced by a plant</span>
          </mat-list-item>
          <h3 class="sidenav-title">Fertility Analysis</h3>
          <mat-list-item>
            <span matListItemLine>Produced by a plant</span>
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

}
