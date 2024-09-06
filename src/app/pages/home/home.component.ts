import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FooterComponent } from '../../Components/footer/footer.component';
import { HeaderComponent } from '../../Components/header/header.component';
import { AuthService } from '../../services/Auth/auth.service';
import { UserService } from '../../Auth/service/user.service';

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
export class HomeComponent implements OnInit {

  user$ = this.authService.currentUser$;

  constructor(
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    
  }

}
