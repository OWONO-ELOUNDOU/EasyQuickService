import { Component } from '@angular/core';
import { CdkStepperModule } from '@angular/cdk/stepper';

@Component({
  selector: 'app-task-quality',
  standalone: true,
  imports: [CdkStepperModule],
  templateUrl: './task-quality.component.html',
  styleUrl: './task-quality.component.css'
})
export class TaskQualityComponent {
  taskQualities = [
    {
      name: 'Administratives'
    },
    {
      name: 'Commerciale'
    },
    {
      name: 'Privée'
    },
    {
      name: 'Personnelle'
    },
    {
      name: 'Autre'
    }
  ];
}
