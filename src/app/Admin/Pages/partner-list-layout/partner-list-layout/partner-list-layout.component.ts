import { Component } from '@angular/core';

// Import Components
import { SidebarComponent } from '../../../../Components/sidebar/sidebar.component';

@Component({
  selector: 'app-partner-list-layout',
  standalone: true,
  imports: [
    SidebarComponent
  ],
  templateUrl: './partner-list-layout.component.html',
  styleUrl: './partner-list-layout.component.css'
})
export class PartnerListLayoutComponent {
  title = 'Partner Management'
}
