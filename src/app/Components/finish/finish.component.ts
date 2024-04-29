import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TaskForm } from '../../models/task-form';
import { FormService } from '../../services/Forms/form.service';
import { NotificationService } from '../../services/Notification/notification.service';

@Component({
  selector: 'app-finish',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './finish.component.html',
  styleUrl: './finish.component.css'
})
export class FinishComponent {
  task: TaskForm = JSON.parse(localStorage.getItem('task') || '' );
  logo = 'assets/images/logos/logo.png';
  isLoading = false;
  successMsg = 'Votre commande a bien été enregistrée, Merci de votre confiance!';
  errMsg = 'Une erreur est survenue';

  constructor(
    private formService: FormService,
    private notification: NotificationService
  ){
  }

  ngOnInit(): void {
    this.displayTask();
  }

  async displayTask() {
    this.isLoading = !this.isLoading;
    try {
      this.formService.addTask(this.task).subscribe(() => {
        this.isLoading = !this.isLoading;
        this.notification.sendNotification(this.logo, this.successMsg);
      })
    } catch (error) {
      this.isLoading = !this.isLoading;
      console.log(error);
      this.notification.sendNotification(this.logo, this.errMsg)
    }
    // console.log(this.task);
  }
}
