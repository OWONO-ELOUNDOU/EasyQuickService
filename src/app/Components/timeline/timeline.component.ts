import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskForm } from '../../models/task-form';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {

  @Input() history: any[] = []; 

}
