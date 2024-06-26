import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

// Import de Composants
import { HeaderComponent } from '../../Components/header/header.component';
import { FooterComponent } from '../../Components/footer/footer.component';

// Import de Modeles
import { User } from '../../models/user';

// Import de services
import { PartnerService } from '../../services/Partner/partner.service';

@Component({
  selector: 'app-partner',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './partner.component.html',
  styleUrl: './partner.component.css'
})
export class PartnerComponent {
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
  ]

  constructor(
    private partnerService: PartnerService,
    private router: Router
  ) {

  }

  submit(partner: User) {
    console.table(partner);
    this.partnerService.addPartner(partner).then(() => {
      alert('Vous serez redirigé vers une autre page');
      this.router.navigate(['/user']);
    }).catch((error) => {
      alert(error);
    })
  }
}
