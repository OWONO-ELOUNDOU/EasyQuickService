import { Component } from '@angular/core';
import { ImageSliderComponent } from '../../Components/image-slider/image-slider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ImageSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  slides: any[] = [
    {
      url: 'assets/images/person.webp',
      title: 'First slide',
      description: 'This is the first slide'
    },
    {
      url: 'assets/images/image1.webp',
      title: 'Second slide',
      description: 'This is the second slide'
    },
    // {
    //   url: 'assets/images/round.webp',
    //   title: 'Third slide',
    //   description: 'This is the third slide'
    // },
  ];
}
