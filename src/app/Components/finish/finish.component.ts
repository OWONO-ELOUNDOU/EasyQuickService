import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TaskForm } from '../../models/task-form';
import { FormService } from '../../services/Forms/form.service';

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
      })
    } catch (error) {
      this.isLoading = !this.isLoading;
      console.log(error);
    }
    // console.log(this.task);
  }
}
