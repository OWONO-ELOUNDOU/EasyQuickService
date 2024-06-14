import { Component, OnInit } from '@angular/core';

import { SidebarComponent } from '../../../../Components/sidebar/sidebar.component';
import { TasksService } from '../../../../services/Tasks/tasks.service';
import { TaskForm } from '../../../../models/task-form';
import { map } from 'rxjs';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    SidebarComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {

  title = 'Tasks Management';
  tasks: any[] = [];

  constructor(
    private taskService: TasksService
  ) { }
  
  ngOnInit(): void {
    this.fecthData();
  }

  fecthData() {
    this.taskService.getAllTasks().pipe(map((res) => {
      const task = [];
      for (const key in res) {
        if (res.hasOwnProperty(key)) {
          task.push({ ...res[key], id: key })
        }
      }
      return task;
    }))
      .subscribe((task) => {
        console.log(task);
        this.tasks = task;
        console.log(this.tasks.length);
    })
  }

}
