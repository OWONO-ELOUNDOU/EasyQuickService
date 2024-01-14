import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-partner',
  standalone: true,
  imports: [RouterModule],
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
  ]
}
