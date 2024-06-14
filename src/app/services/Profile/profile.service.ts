import { Injectable } from '@angular/core';
import { Database, onValue, ref, update } from '@angular/fire/database';
import { ProfileUser } from '../../Auth/model/profile-user';
import { AuthService } from '../Auth/auth.service';
import { of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private database: Database,
    private authService: AuthService
  ) { }

  updateUser(user: ProfileUser) {
    return update(ref(this.database, 'Users/' + user.firstName), {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      address: user.address,
      twon: user.twon,
      region: user.region
    })
  }

    
}
