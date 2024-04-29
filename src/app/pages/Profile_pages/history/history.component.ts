import { Component } from '@angular/core';

import { TaskForm } from '../../../models/task-form';
import { ProfileService } from '../../../services/Profile/profile.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {

  // myTasks$ = this.profileService.myTask$;
  today = new Date().toLocaleDateString();
  myTasks: TaskForm[] = [];

  constructor(
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.displayTasks();
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
