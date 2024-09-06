import { Component } from '@angular/core';

// Import Components
import { SidebarComponent } from '../../../Components/sidebar/sidebar.component';

@Component({
  selector: 'app-users-list-layout',
  standalone: true,
  imports: [
    SidebarComponent
  ],
  templateUrl: './users-list-layout.component.html',
  styleUrl: './users-list-layout.component.css'
})
export class UsersListLayoutComponent {

  title = 'Users List';

  constructor() {
    
  }

}
