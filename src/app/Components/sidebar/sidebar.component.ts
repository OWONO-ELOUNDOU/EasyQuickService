import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/Auth/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  user$ = this.authService.currentUser$;

  @Input() pageTitle: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  logOut() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
