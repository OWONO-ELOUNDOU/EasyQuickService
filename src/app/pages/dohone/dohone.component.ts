import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from '../../services/Auth/auth.service';

@Component({
  selector: 'app-dohone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dohone.component.html',
  styleUrl: './dohone.component.css'
})
export class DohoneComponent {
  
  user$ = this.authService.currentUser$;

  constructor(
    private authService: AuthService
  ){}

}
