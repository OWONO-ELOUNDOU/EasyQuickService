import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Import de Composants
import { HeaderComponent } from '../../Components/header/header.component';
import { FooterComponent } from '../../Components/footer/footer.component';
import { LoadingComponent } from '../../Components/loading/loading.component';

// Import de Models
import { TaskForm } from '../../models/task-form';

// Import de Services
import { FormService } from '../../services/Forms/form.service';
import { AuthService } from '../../services/Auth/auth.service';
import { DohoneService } from '../../services/Dohone/dohone.service';

@Component({
  selector: 'app-service-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HeaderComponent,
    FooterComponent,
    LoadingComponent
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

  count = 0;
  isLoading: boolean = false;
  isRegister: boolean = false;
  errorMessage: string = '';
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
    private authService: AuthService,
    private dohoneService: DohoneService
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

  addToCart(form: TaskForm) {
    this.dohoneService.addToCart(form);

    this.count = this.dohoneService.getCount();
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
        this.isLoading = !this.isLoading;
        form.type = this.selectedType;
        form.object = this.selectedObj;
        form.quality = this.selectedQlt;
        form.creationDate = this.date;
        this.formService.addTask(form).subscribe(() => {
          this.isLoading = !this.isLoading;
          this.isRegister = !this.isRegister;
          alert('votre demande a bien été prise en compte');
          this.addToCart(form);
          this.router.navigate(['dohone']);
        }, (error) => {
          this.errorMessage = error.message;
        })
      } catch (error) {
        console.log(error);
      }

    }

  }
}
