import { Component, OnInit } from '@angular/core';

import { TimelineComponent } from '../../../Components/timeline/timeline.component';
import { SidebarComponent } from '../../../Components/sidebar/sidebar.component';

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [SidebarComponent, TimelineComponent],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css'
})
export class TransactionComponent implements OnInit {

  title = 'Transactions';

  orders: any[] = [];

  constructor() {

  }
  ngOnInit(): void {
    this.orders = [
      {
        clientName: "John Doe",
        email: "Johndoe@user.com",
        phoneNumber: "699999999",
        price: "3000",
        date: "15/10/2024 - 15:30"
      },
      {
        clientName: "user01",
        email: "user01@user.com",
        phoneNumber: "699999999",
        price: "9000",
        date: "10/10/2024 - 15:30"
      },
      {
        clientName: "user02",
        email: "user02@user.com",
        phoneNumber: "699999999",
        price: "15000",
        date: "20/10/2024 - 15:30"
      },
      {
        clientName: "user03",
        email: "user03@user.com",
        phoneNumber: "699999999",
        price: "21000",
        date: "11/10/2024 - 15:30"
      },
      {
        clientName: "user04",
        email: "Juser04@user.com",
        phoneNumber: "699999999",
        price: "25000",
        date: "19/10/2024 - 15:30"
      }
    ]
  }

}
