import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Importation of components
import { LoadingComponent } from '../../Components/loading/loading.component';

// Importation of Services
import { AuthService } from '../../services/Auth/auth.service';
import { ToastrService, ToastrModule} from "ngx-toastr";
import {UserService} from "../service/user.service";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ToastrModule,
    ReactiveFormsModule,
    LoadingComponent
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{

  user$ = this.authservice.currentUser$;
  isLoading: boolean = false;
  signupForm = new FormGroup({
    uid: new FormControl(''),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    phoneNumber: new FormControl('', [Validators.required, Validators.minLength(9)]),
    streetAddress: new FormControl('', Validators.required),
    role: new FormControl(''),
    twon: new FormControl('', Validators.required),
    region: new FormControl('', Validators.required),
  });

  constructor(
    private router: Router,
    private userService: UserService,
    private authservice: AuthService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {}

  get firstName() {
    return this.signupForm.get('firstName');
  }
  get lastName() {
    return this.signupForm.get('lastName');
  }
  get email() {
    return this.signupForm.get('email');
  }
  get password() {
    return this.signupForm.get('password');
  }
  get phoneNumber() {
    return this.signupForm.get('phoneNumber');
  }
  get streetAddress() {
    return this.signupForm.get('streetAddress');
  }
  get twon() {
    return this.signupForm.get('twon');
  }
  get region() {
    return this.signupForm.get('region');
  }

  onSubmit() {
    if(!this.signupForm.valid) return;

    this.isLoading = !this.isLoading;
    this.signupForm.patchValue({
      role: 'user'
    })
    const { firstName, email, password } = this.signupForm.value;
    try {
      this.authservice.signUp(email, password).pipe(
        switchMap(({ user: { uid } }) => this.userService.addUser(uid, this.signupForm.value))
      )
        .subscribe(() => {
          this.toastr.success('Register successfully', 'success');
          this.router.navigate(['/home']);
          this.isLoading = !this.isLoading;
        }, (error) => {
          this.toastr.error(error.message, 'error');
          this.isLoading = !this.isLoading;
        })
    } catch(error) {
      this.toastr.error( 'Une erreur est survenue!', 'error');
      this.isLoading = !this.isLoading;
    }
  }

}
