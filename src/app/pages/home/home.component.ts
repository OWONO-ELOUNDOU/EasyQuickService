import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FooterComponent } from '../../Components/footer/footer.component';
import { HeaderComponent } from '../../Components/header/header.component';
import { AuthService } from '../../services/Auth/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  user$ = this.authService.currentUser$;

  constructor(
    public authService: AuthService
  ) {}

  // slides: any[] = [
  //   {
  //     url: 'assets/images/person.webp',
  //     title: 'First slide',
  //     link: 'service-list',
  //     type: 'Easy-asker',
  //     description: 'Cherchez, obtenez, vérifiez, suivez: un dossier, une information, un RDV, un colis,... dans le pays séléctionné sans vous déplacer.'
  //   },
  //   {
  //     url: 'assets/images/image3.jpeg',
  //     title: 'Second slide',
  //     link: 'partner',
  //     type: 'Easy-jober',
  //     description: 'Devenez Partenaire & Augmentez vos revenus avec nos missions en free-lance dans votre pays'
  //   }
  // ];

}
