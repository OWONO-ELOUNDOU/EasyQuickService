import { Component, Input } from '@angular/core';

// Import de Models
import { TaskForm } from '../../models/task-form';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css'
})
export class TaskDetailsComponent {

  @Input() service!: TaskForm;
  @Input() uid!: string;

  constructor() {}

}
