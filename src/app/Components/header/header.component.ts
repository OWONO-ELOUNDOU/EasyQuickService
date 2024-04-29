import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { mobileLinks, navLinks } from '../../models/navlink';
import { AuthService } from '../../services/Auth/auth.service';
import { UserService } from '../../Auth/service/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isOpenMenu: boolean = false;
  links = navLinks;
  mobiles = mobileLinks;

  user$ = this.authService.currentUser$;

  constructor(
    private usersService: UserService,
    private authService: AuthService
  ) {}

  toggleMenu() {
    this.isOpenMenu = !this.isOpenMenu;
  }
}
