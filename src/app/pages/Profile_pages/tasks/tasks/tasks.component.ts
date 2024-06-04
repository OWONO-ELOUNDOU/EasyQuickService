import { Component } from '@angular/core';

import { SidebarComponent } from '../../../../Components/sidebar/sidebar.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    SidebarComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  title = 'Tasks Management'

}