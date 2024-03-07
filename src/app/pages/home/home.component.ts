import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ImageSliderComponent } from '../../Components/image-slider/image-slider.component';
import { AuthService } from '../../services/Auth/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ImageSliderComponent, RouterModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  user$ = this.authService.currentUser$;

  constructor(
    public authService: AuthService
  ) {}

  onSubmit(flagForm: {
    flag: string;
  }) {
    alert(`Your country is: ${flagForm.flag}`);
  }
  slides: any[] = [
    {
      url: 'assets/images/person.webp',
      title: 'First slide',
      link: 'service-list',
      type: 'Easy-asker',
      description: 'Cherchez, obtenez, vérifiez, suivez: un dossier, une information, un RDV, un colis,... dans le pays séléctionné sans vous déplacer.'
    },
    {
      url: 'assets/images/image3.jpeg',
      title: 'Second slide',
      link: 'partner',
      type: 'Easy-jober',
      description: 'Devenez Partenaire & Augmentez vos revenus avec nos missions en free-lance dans votre pays'
    }
  ];

  flags = [
    {
      code: 'CMR',
      label: 'Cameroun',
      icon: 'assets/flags/cm.svg'
    },
    {
      code: 'CI',
      label: 'Cote d\'ivoire',
      icon: ''
    },
    {
      code: 'TG',
      label: 'Togo',
      icon: ''
    },
    {
      code: 'SN',
      label: 'Sénégal',
      icon: ''
    },
    {
      code: 'NG',
      label: 'Nigéria',
      icon: ''
    },
  ]
}
