import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { navLinks } from '../../models/navlink';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  links = navLinks;
  socialMedia = [
    {
      id: 1,
      name: "dribble",
      icon: "fa-brands fa-dribbble",
      url: ""
    },
    {
      id: 2,
      name: "facebook",
      icon: "fa-brands fa-facebook",
      url: ""
    },
    {
      id: 3,
      name: "instagram",
      icon: "fa-brands fa-instagram",
      url: ""
    },
    {
      id: 4,
      name: "twitter",
      icon: "fa-brands fa-x-twitter",
      url: ""
    },
    {
      id: 5,
      name: "youtube",
      icon: "fa-brands fa-youtube",
      url: ""
    },
  ]
}
