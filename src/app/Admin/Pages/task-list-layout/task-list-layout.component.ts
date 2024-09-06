import { Component, OnInit } from '@angular/core';

// Import Components
import { SidebarComponent } from '../../../Components/sidebar/sidebar.component';

// Import Services
import { TaskServiceService } from '../../Services/task-service/task-service.service';
import { ToastrService, ToastrModule } from 'ngx-toastr';

// Import Models
import { TaskForm } from '../../../models/task-form';


@Component({
  selector: 'app-task-list-layout',
  standalone: true,
  imports: [
    SidebarComponent,
    ToastrModule
  ],
  templateUrl: './task-list-layout.component.html',
  styleUrl: './task-list-layout.component.css'
})
export class TaskListLayoutComponent implements OnInit {

  title = 'task-list';
  taskDataList: TaskForm[] = [];
  taskListNumber = 0;

  constructor(
    private toast: ToastrService,
    private taskListService: TaskServiceService
  ) { }
  
  ngOnInit(): void {
    this.fetchTaskList();
  }

  fetchTaskList() {
    this.taskListService.getAllTasks().subscribe((data) => {
      console.log(data);
      this.taskDataList = data;
      this.taskListNumber += this.taskDataList.length
      this.toast.success('Data loaded', 'success');
    }, (error) => {
      this.toast.error('No Data Found', 'error');
    })
  }

}
