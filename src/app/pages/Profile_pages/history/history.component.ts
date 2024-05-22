import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

import { TaskForm } from '../../../models/task-form';
import { UserService } from '../../../Auth/service/user.service';
import { ProfileService } from '../../../services/Profile/profile.service';

import { TimelineComponent } from '../../../Components/timeline/timeline.component';
import { SidebarComponent } from '../../../Components/sidebar/sidebar.component';

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

  // myTasks$ = this.profileService.myTask$;
  today = new Date().toLocaleDateString();
  myTasks: TaskForm[] = [];
  title = 'Historique';

  events!: any[];

  constructor(
    private profileService: ProfileService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.displayTasks();
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

  private displayTasks() {
    this.profileService.getTasks().pipe(map((res) => {
      const tasks = [];
      for(const key in res) {
        if(res.hasOwnProperty(key)){
          tasks.push({ ...res[key], id: key })
        }
      }
      return tasks;
    })).subscribe((tasks) => {
      console.log(tasks);
      this.myTasks = tasks;
      console.log(this.myTasks.length);
    })
  }

}
