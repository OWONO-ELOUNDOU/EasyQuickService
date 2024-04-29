import { Component, Input } from '@angular/core';
import { TaskForm } from '../../models/task-form';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.css'
})
export class PreviewComponent {
  @Input({ required: true }) form!: TaskForm;
  // form = input.required<TaskForm>();
  // task = JSON.parse(localStorage.getItem('task') || '');
}
