import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CdkStepperModule } from '@angular/cdk/stepper';

import { FinishComponent } from '../../Components/finish/finish.component';
import { TaskForm } from '../../models/task-form';
import { UserService } from '../../Auth/service/user.service';
import { AuthService } from '../../services/Auth/auth.service';
import { FormService } from '../../services/Forms/form.service';
import { user } from '@angular/fire/auth';

@Component({
  selector: 'app-service-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CdkStepperModule,
    FinishComponent
  ],
  templateUrl: './service-list.component.html',
  styleUrl: './service-list.component.css'
})
export class ServiceListComponent {

  selectedType!: string;
  selectedObj!: string;
  selectedQlt!: string;
  item = localStorage.getItem('taskType');

  types = [
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
  qualities = [
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
  objects = [
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

  constructor(
    private formService: FormService
  ) {}

  showItemType(e: any) {
    this.selectedType = e.target.value;
  }

  showItemObj(e: any) {
    this.selectedObj = e.target.value;
  }

  showItemQlt(e: any) {
    this.selectedQlt = e.target.value;
  }

  async display(form: TaskForm) {
    if (
      form.type == '' ||
      form.object == '' ||
      form.quality == '' ||
      form.description == '' ||
      form.service == '' ||
      form.natureJurid == '' ||
      form.localisation == ''
    ) {
      alert("Veuillez remplir tous les champs");
    } else {

      let date = await new Date().toLocaleDateString() + ' - ' + new Date().toLocaleTimeString();
      try {
        
        form.type = this.selectedType;
        form.object = this.selectedObj;
        form.quality = this.selectedQlt;
        form.date = date;
        console.table(form);
        this.formService.addForm(form);
      } catch (error) {
        console.log(error);
      }

    }

  }
}
