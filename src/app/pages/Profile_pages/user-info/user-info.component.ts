import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from 'firebase/auth';
import { AuthService } from '../../../services/Auth/auth.service';
import { ProfileService } from '../../../services/Profile/profile.service';
import { HotToastService } from '@ngneat/hot-toast';
import { concatMap } from 'rxjs';
import { UserService } from '../../../Auth/service/user.service';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent {
  user$ = this.authService.currentUser$

  constructor(
    private authService: AuthService,
    private profileService: ProfileService,
    private usersService: UserService,
    private toast: HotToastService
  ) {}

  ngOnInit(): void {
    
  }

  uploadImage(event: any, user: User) {
    this.profileService.uploadImage(event.target.files[0], `images/profile/${user.uid}`).pipe(
      this.toast.observe({
        success: 'Image uploaded',
        error: 'une erreur est survenue',
        loading: 'uploading...'
      }),
      concatMap((photoURL) => this.authService.updateProfileData({ photoURL }))
    )
    .subscribe()
  }
}
