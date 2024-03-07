import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { User } from 'firebase/auth';
import { concatMap, switchMap } from 'rxjs';
import { HotToastService } from '@ngneat/hot-toast';

import { AuthService } from '../../services/Auth/auth.service';
import { ProfileUser } from '../model/profile-user';
import { ProfileService } from '../../services/Profile/profile.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  user$ = this.authservice.currentUser$;

  profileForm!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private toast: HotToastService,
    private authservice: AuthService,
    private usersService: UserService,
    private profileService: ProfileService,
  ) {
    this.profileForm = this.fb.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      phone: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      region: new FormControl('', [Validators.required]),
      twon: new FormControl('', [Validators.required]),
    })
  }

  uploadImage(event: any, user: User) {
    this.profileService.uploadImage(event.target.files[0], `images/profile/${user.uid}`).pipe(
      this.toast.observe({
        success: 'Image Uploaded',
        loading: 'Image is being uploaded',
        error: 'there was an error'
      }),
      concatMap((photoURL) => this.authservice.updateProfileData({ photoURL }))
    ).subscribe();
  }

  onSubmit() {
    if(this.profileForm.valid) {
      console.log(this.profileForm);
    }else{
      this.profileForm.markAllAsTouched();
    }
  }


  saveProfile(user: ProfileUser) {
    if (
      user.firstName == "" ||
      user.lastName == "" ||
      user.email == "" ||
      user.phone == "" ||
      user.region == "" ||
      user.address == "" ||
      user.twon == ""
    ) {
      alert("Vueillez remplir tous les champs");
    } else {
      console.table(user);
      this.authservice.signUp(user.email, user.password).pipe(
        switchMap(({ user: { uid } }) => this.usersService.addUser({
          uid,
          email: user.email,
          displayName: user.firstName,
          firstName: user.firstName,
          lastName: user.lastName,
          password: user.password,
          phone: user.phone,
          twon: user.twon,
          address: user.address,
          region: user.region
        })),
        this.toast.observe({
          success: 'Congrats! You are all signed Up',
          loading: 'Signing In...',
          error: ({message}) => `${message}`
        })
      ).subscribe(() => {
        this.router.navigate(['/home']);
      })
    }
  }

}
