import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Components
import { SidebarComponent } from '../../../Components/sidebar/sidebar.component';
import { AuthService } from '../../../services/Auth/auth.service';

@Component({
  selector: 'app-admin-profile-layout',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent
  ],
  templateUrl: './admin-profile-layout.component.html',
  styleUrl: './admin-profile-layout.component.css'
})
export class AdminProfileLayoutComponent {

  user$ = this.authService.currentUser$;

  constructor(
    private authService: AuthService
  ) {}

}
