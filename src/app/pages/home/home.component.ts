import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ImageSliderComponent } from '../../Components/image-slider/image-slider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ImageSliderComponent, RouterModule],
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
    }
  ];
}
