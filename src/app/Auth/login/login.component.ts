import {Component, OnInit} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

// Importation of Components
import { LoadingComponent } from '../../Components/loading/loading.component';

// Importation of Services
import {ToastrService, ToastrModule} from "ngx-toastr";
import { AuthService } from '../../services/Auth/auth.service';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingComponent,
    ToastrModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  isLoading: Boolean = false;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    if(!this.loginForm.valid) {
      return;
    }

    this.isLoading = !this.isLoading;
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password).subscribe(() => {
      this.isLoading = !this.isLoading;
      this.toastr.success('Login Successful!', 'success');
      this.router.navigate(['/home']);
    }, (error) => {
      this.toastr.error(error.message, 'error');
    })
  }
}
