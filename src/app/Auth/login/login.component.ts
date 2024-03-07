import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';

import { AuthService } from '../../services/Auth/auth.service';
import { Login } from '../../models/login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private authService: AuthService,
    private router: Router,
    private toast: HotToastService
  ) {}

  submit(loginForm: Login) {
    if(loginForm.email == '' || loginForm.password == '') {
        alert(`email and password required`);
    } else {
      // console.table(loginForm);
      this.authService.login(loginForm.email, loginForm.password).pipe(
        this.toast.observe({
          success: 'logged in successfully',
          loading: 'logging in',
          error: 'There was an error'
        })
      ).subscribe(() => {
        this.router.navigate(['/home']);
      })
    }
  }
}
