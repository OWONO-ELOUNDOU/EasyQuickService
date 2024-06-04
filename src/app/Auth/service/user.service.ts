import { Injectable } from '@angular/core';
import { Database, set, ref, update } from '@angular/fire/database';

import { ProfileUser } from '../model/profile-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userData: any;

  // get currentUserProfile(): Observable<ProfileUser | null> {
  //   return this.authService.currentUser$.pipe(
  //     switchMap(user => {
  //       if(!user?.uid) {
  //         return of(null);
  //       } else {
  //         const userRef = ref(this.database, 'Users/' + user.uid);
  //         onValue(userRef, (snapshot) => {
  //           const data = snapshot.val()
  //           this.userData = data;
  //           console.log(data);
  //         })
  //         return this.userData as Observable<ProfileUser>
  //       }
  //     })
  //   )
  // }

  constructor(
    private database: Database
  ) { }
  

  addUser(user: ProfileUser) {
    return set(ref(this.database, 'Users/' + user.firstName), {
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
