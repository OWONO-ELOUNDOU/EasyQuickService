import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { animate, style, transition, trigger } from '@angular/animations';

import { navLinks } from '../../models/navlink';

// const enterTransition = transition(':enter', [
//   style({
//     opacity: 0
//   }),
//   animate('1s ease-in', style({opacity: 1}))
// ])
// const fadeIn = trigger('fadeIn', [enterTransition]);
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  // animations: [fadeIn]
})
export class HeaderComponent {
  isOpenMenu: boolean = false;

  links = navLinks

  toggleMenu() {
    this.isOpenMenu = !this.isOpenMenu;
  }
}
