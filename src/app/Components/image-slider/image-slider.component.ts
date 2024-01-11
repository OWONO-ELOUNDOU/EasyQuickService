import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css'
})
export class ImageSliderComponent {
  
  @Input() slides: any[] = [];
  currentSlide = 0;

  previous() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  next() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  jumpToSlide(index: number) {
    this.currentSlide = index;
    setTimeout(() => {
      
    }, 500)
  }

  ngOnInit(): void {
    
  }
}
