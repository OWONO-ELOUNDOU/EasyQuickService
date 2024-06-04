import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

import { TaskForm } from '../../../models/task-form';
import { UserService } from '../../../Auth/service/user.service';
import { ProfileService } from '../../../services/Profile/profile.service';

import { TimelineComponent } from '../../../Components/timeline/timeline.component';
import { SidebarComponent } from '../../../Components/sidebar/sidebar.component';
import { FormService } from '../../../services/Forms/form.service';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [
    SidebarComponent,
    TimelineComponent
  ],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit {

  today = new Date().toLocaleDateString();
  Tasks: TaskForm[] = [];
  title = 'Historique';

  events!: any[];

  constructor(
    private formService: FormService
  ) {}

  ngOnInit(): void {
    this.events = [
      {
        content: 'Ordered',
        date: '15/02/2021 15:30',
        stauts: 'R'
      },
      {
        content: 'Processing',
        date: '15/02/2021 15:30',
        stauts: 'R'
      },
      {
        content: 'Shipped'
      },
      {
        content: 'Delivered'
      }
    ]
  }

}
