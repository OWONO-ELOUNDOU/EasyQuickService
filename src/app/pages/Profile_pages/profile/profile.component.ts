import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/Auth/auth.service';
import { User } from 'firebase/auth';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  user$ = this.authService.currentUser$

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  signOut() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/login'])
    })
  }

}
