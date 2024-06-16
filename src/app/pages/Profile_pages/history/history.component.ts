import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

import { TaskForm } from '../../../models/task-form';
import { UserService } from '../../../Auth/service/user.service';
import { ProfileService } from '../../../services/Profile/profile.service';

import { TimelineComponent } from '../../../Components/timeline/timeline.component';
import { SidebarComponent } from '../../../Components/sidebar/sidebar.component';
import { FormService } from '../../../services/Forms/form.service';
import { TaskState } from 'firebase/storage';
import { TasksService } from '../../../services/Tasks/tasks.service';

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
    private formService: FormService,
    private taskService: TasksService
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
    ];

    this.fecthData();
  }

  fecthData() {
    this.taskService.getUserTasks().pipe(map((res: any) => {
      const task = [];
      for (const key in res) {
        if (res.hasOwnProperty(key)) {
          task.push({...res[key], id: key})
        }
      }
      return task;
    })).subscribe((task) => {
      console.log(task);
      this.Tasks = task;
      console.log(this.Tasks.length);
    })
  }

}
