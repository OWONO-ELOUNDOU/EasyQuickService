import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-type',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-type.component.html',
  styleUrl: './task-type.component.css'
})
export class TaskTypeComponent {

  defaultType = 'Type de service'
  taskTypes = [
    {
      name: 'Rechercher'
    },
    {
      name: 'Obtenir'
    },
    {
      name: 'Vérifier'
    },
    {
      name: 'Suivre'
    },
    {
      name: 'Autre'
    }
  ];

  setSelectedStatus(arg0: any) {
    throw new Error('Method not implemented.');
  }
  selectedStatusId: any;

}
