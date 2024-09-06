import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { concatMap } from 'rxjs';
import { User } from 'firebase/auth';

// Import Models
import { ProfileUser } from '../../../Auth/model/profile-user';

// Import Services
import { AuthService } from '../../../services/Auth/auth.service';
import { ProfileService } from '../../../services/Profile/profile.service';
import { UserService } from '../../../Auth/service/user.service';
import { ImageUploaderService } from '../../../services/Image-Uploader/image-uploader.service';
import { ToastrService, ToastrModule } from "ngx-toastr";

import { SidebarComponent } from '../../../Components/sidebar/sidebar.component';


@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SidebarComponent,
    ToastrModule
  ],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent {
  user$ = this.authService.currentUser$;
  title = 'Account';
  logo = 'assets/images/logos/logo.png';

  constructor(
    private authService: AuthService,
    private uploadService: ImageUploaderService,
    private profileService: ProfileService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {

  }

  uploadImage(event: any, user: User) {
    this.uploadService.uploadImage(event.target.files[0], `images/profile/${user.uid}`).pipe(
      concatMap((photoURL) => this.authService.updateProfileData({ photoURL }))
    )
    .subscribe(() => {
      this.toastr.success("Image upload successfully", "success")
    })
  }

  onSubmit(user: ProfileUser) {
    this.profileService.updateUser(user)
      .then(() => {
        this.toastr.success("User Updated successfully", "success")
      })
    .catch((error) => {
      this.toastr.success(error.message, "success")
    })
  }
}
