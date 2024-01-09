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
      url: 'https://picsum.photos/seed/picsum/200/300',
      title: 'First slide',
      description: 'This is the first slide'
    },
    {
      url: 'https://picsum.photos/seed/picsum/200/300',
      title: 'Second slide',
      description: 'This is the second slide'
    },
    {
      url: 'https://picsum.photos/seed/picsum/200/300',
      title: 'Third slide',
      description: 'This is the third slide'
    },
  ];
}
