import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CdkStepperModule } from '@angular/cdk/stepper';

@Component({
  selector: 'app-task-obj',
  standalone: true,
  imports: [FormsModule, CdkStepperModule],
  templateUrl: './task-obj.component.html',
  styleUrl: './task-obj.component.css'
})
export class TaskObjComponent {
  
  taskObjects = [
    {
      name: 'Dossier'
    },
    {
      name: 'Information'
    },
    {
      name: 'Rendez-Vous'
    },
    {
      name: 'Colis'
    },
    {
      name: 'Autre'
    }
  ];

}
