import { Component } from '@angular/core';

// Import Components
import { SidebarComponent } from '../../../../Components/sidebar/sidebar.component';

@Component({
  selector: 'app-transaction-list-layout',
  standalone: true,
  imports: [
    SidebarComponent
  ],
  templateUrl: './transaction-list-layout.component.html',
  styleUrl: './transaction-list-layout.component.css'
})
export class TransactionListLayoutComponent {

  title = 'Transaction Management';

  constructor() {}

}
