import { Component } from '@angular/core';
import { SidebarComponent } from "../../../../Components/sidebar/sidebar.component";

@Component({
  selector: 'app-completed-task-layout',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './completed-task-layout.component.html',
  styleUrl: './completed-task-layout.component.css'
})
export class CompletedTaskLayoutComponent {

}
