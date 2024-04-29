import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Import de Composants
import { HeaderComponent } from '../../Components/header/header.component';
import { FooterComponent } from '../../Components/footer/footer.component';
import { PreviewComponent } from '../../Components/preview/preview.component';

// Import de Models
import { TaskForm } from '../../models/task-form';

// Import de Services
import { FormService } from '../../services/Forms/form.service';
import { AuthService } from '../../services/Auth/auth.service';

@Component({
  selector: 'app-service-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HeaderComponent,
    FooterComponent,
    PreviewComponent
  ],
  templateUrl: './service-list.component.html',
  styleUrl: './service-list.component.css'
})
export class ServiceListComponent {

  selectedType!: string;
  selectedObj!: string;
  selectedQlt!: string;
  description!: string;
  natureJuridique!: string;
  service!: string;
  localisation!: string;

  date = new Date().toLocaleDateString()
  // let date = await new Date().toLocaleDateString() + ' - ' + new Date().toLocaleTimeString();
  
  user$ = this.authService.currentUser$;

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
    private router: Router,
    private formService: FormService,
    private authService: AuthService
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

  showDescription(e: any) {
    this.description = e.target.value;
  }
  showNatureJuridique(e: any) {
    this.natureJuridique = e.target.value;
  }

  showService(e: any) {
    this.service = e.target.value;
  }

  showLocalisation(e: any) {
    this.localisation = e.target.value;
  }

  async onSubmit(
      form: TaskForm,
      userId: string
    ) {
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

      try {
        form.type = this.selectedType;
        form.object = this.selectedObj;
        form.quality = this.selectedQlt;
        form.creationDate = this.date;
        console.table(form);
        localStorage.setItem('task', JSON.stringify(form))
        this.router.navigate(['dohone']);
        // this.formService.addTask(form, userId).subscribe(() => {
        //   alert('votre demande a bien été prise en compte');
        // })
      } catch (error) {
        console.log(error);
      }

    }

  }
}
