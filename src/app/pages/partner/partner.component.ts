import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../models/user';
import { PartnerService } from '../../services/Partner/partner.service';

@Component({
  selector: 'app-partner',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './partner.component.html',
  styleUrl: './partner.component.css'
})
export class PartnerComponent {
  missions = [
    {
      name: 'Suivre',
      description: 'une information, un dossier, un colis, un RDV, une opération, partout au Cameroun'
    },
    {
      name: 'Vérifier',
      description: 'une information, un dossier, un colis, un RDV, une opération, partout au Cameroun'
    },
    {
      name: 'Chercher',
      description: 'une information, un dossier, un colis, un RDV, une opération, partout au Cameroun'
    },
    {
      name: 'Récupérer',
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
    this.partnerService.addPartner(partner)
  }
}
