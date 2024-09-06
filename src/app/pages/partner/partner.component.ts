import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

// Import de Composants
import { HeaderComponent } from '../../Components/header/header.component';
import { FooterComponent } from '../../Components/footer/footer.component';

// Import de services
import { PartnerService } from '../../services/Partner/partner.service';
import {AuthService} from "../../services/Auth/auth.service";
import { ToastrService, ToastrModule } from "ngx-toastr";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-partner',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    HeaderComponent,
    FooterComponent,
    ToastrModule,
    ReactiveFormsModule
  ],
  templateUrl: './partner.component.html',
  styleUrl: './partner.component.css'
})
export class PartnerComponent {

  isLoading = false;
  user$ = this.authService.currentUser$;
  missions = [
    {
      name: 'Suivre',
      image: 'assets/images/icons/suivre.png',
      description: 'une information, un dossier, un colis, un RDV, une opération, partout au Cameroun'
    },
    {
      name: 'Vérifier',
      image: 'assets/images/icons/verifier.png',
      description: 'une information, un dossier, un colis, un RDV, une opération, partout au Cameroun'
    },
    {
      name: 'Chercher',
      image: 'assets/images/icons/chercher.png',
      description: 'une information, un dossier, un colis, un RDV, une opération, partout au Cameroun'
    },
    {
      name: 'Récupérer',
      image: 'assets/images/icons/recuperer.png',
      description: 'une information, un dossier, un colis, un RDV, une opération, partout au Cameroun'
    },
  ];
  conditions = [
    {
      id: 0,
      label: 'Travail libre en free-lance'
    },
    {
      id: 1,
      label: 'Missions sur l\'étendue du territoire'
    },
    {
      id: 2,
      label: 'Rémunération directe par mission'
    },
    {
      id: 3,
      label: 'Choisissez votre région ou ville d\'activité'
    },
    {
      id: 4,
      label: 'Nous vous aidons à vous développer'
    }
  ];
  partnerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required, Validators.minLength(9)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    role: new FormControl(''),
    terms: new FormControl(''),
    activities: new FormControl(''),
    twon: new FormControl('', Validators.required),
    region: new FormControl('', Validators.required),
  })


  constructor(
    private partnerService: PartnerService,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  // Getter function for firstName
  get firstName() {
    return this.partnerForm.get('firstName');
  }

  // Getter function for lastName
  get lastName() {
    return this.partnerForm.get('lastName');
  }

  // Getter function for email
  get email() {
    return this.partnerForm.get('email');
  }

  // Getter function for password
  get password() {
    return this.partnerForm.get('password');
  }

  // Getter function for phoneNumber
  get phoneNumber() {
    return this.partnerForm.get('phoneNumber');
  }

  // Getter function for twon
  get twon() {
    return this.partnerForm.get('twon');
  }

  // Getter function for region
  get region() {
    return this.partnerForm.get('region');
  }

  // Function to register user partner account
  registerPartnerAccount() {
    if(!this.partnerForm.valid) {
      return;
    }

    this.isLoading = !this.isLoading;
    this.partnerForm.patchValue({ role: 'Partner', terms: 'true' });
    const { email, password } = this.partnerForm.value;
    try {
      this.authService.signUp(email, password).pipe(
        switchMap(({user: { uid }}) => this.partnerService.addPartner(uid, this.partnerForm.value))
      )
        .subscribe(() => {
          this.toastr.success('Register successfully', 'success');
          this.isLoading = !this.isLoading;
        }, (error) => {
          this.toastr.error(error.message, 'error');
          this.isLoading = !this.isLoading;
        })
    } catch (error) {
      this.toastr.error('Une erreur est survenue!', 'error');
      this.isLoading = !this.isLoading;
    }
  }

}
