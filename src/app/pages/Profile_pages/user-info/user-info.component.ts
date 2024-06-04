import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { concatMap } from 'rxjs';
import { HotToastService } from '@ngneat/hot-toast';

import { User } from 'firebase/auth';

import { AuthService } from '../../../services/Auth/auth.service';
import { ProfileService } from '../../../services/Profile/profile.service';

import { SidebarComponent } from '../../../Components/sidebar/sidebar.component';
import { UserService } from '../../../Auth/service/user.service';
import { ProfileUser } from '../../../Auth/model/profile-user';
import { NotificationService } from '../../../services/Notification/notification.service';
import { ImageUploaderService } from '../../../services/Image-Uploader/image-uploader.service';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SidebarComponent
  ],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent {
  user$ = this.authService.currentUser$;
  title = 'Account';
  logo = 'assets/images/logos/logo.png';
  successMsg = 'Votre a été modifier avec succes';
  errorMsg = 'Une erreur est survenue';

  constructor(
    private authService: AuthService,
    private uploadService: ImageUploaderService,
    private profileService: ProfileService,
    private toast: HotToastService
  ) {}

  ngOnInit(): void {
    
  }

  uploadImage(event: any, user: User) {
    this.uploadService.uploadImage(event.target.files[0], `images/profile/${user.uid}`).pipe(
      this.toast.observe({
        success: 'Image uploaded',
        error: 'une erreur est survenue',
        loading: 'uploading...'
      }),
      concatMap((photoURL) => this.authService.updateProfileData({ photoURL }))
    )
    .subscribe()
  }

  onSubmit(user: ProfileUser) {
    this.profileService.updateUser(user)
      .then(() => {
        this.toast.observe({
          success: 'profile modifié avec succès',
          error: 'Une erreur est survenue!'
      })
    })
    .catch((error) => {
      alert(error.message);
    })
  }
}
