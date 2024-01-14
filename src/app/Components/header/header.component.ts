import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { navLinks } from '../../models/navlink';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isOpenMenu: boolean = false;

  links = navLinks

  toggleMenu() {
    this.isOpenMenu = !this.isOpenMenu;
  }
}
