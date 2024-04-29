import { Injectable } from '@angular/core';
import { Firestore, doc, docData, setDoc, updateDoc } from '@angular/fire/firestore';
import { ProfileUser } from '../model/profile-user';
import { Observable, from, of, switchMap } from 'rxjs';
import { AuthService } from '../../services/Auth/auth.service';
import { Database, set, ref } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // get currentUserProfile$(): Observable<ProfileUser | null> {
  //   return this.authService.currentUser$.pipe(
  //     switchMap(user => {
        
  //       if(!user?.uid) {
  //         return of(null);
  //       } else {
  //         const ref = doc(this.firestore, 'users', user?.uid);
  //         return docData(ref) as Observable<ProfileUser>;
  //       }

  //     })
  //   )
  // }

  constructor(
    private database: Database,
    private authService: AuthService
  ) { }

  // addUser(user: ProfileUser): Observable<any> {
  //   const ref = doc(this.firestore, 'Users', user.uid);
  //   return from(setDoc(ref, user));
  // }

  addUser(user: ProfileUser) {
    return set(ref(this.database, 'Users/' + user.uid), {
      firstName: user.firstName,
      lastName: user.lastName,
      displayName: user.displayName,
      email: user.email,
      phone: user.phone,
      address: user.address,
      twon: user.twon,
      region: user.region
    })
  }

  // updateUser(user: ProfileUser): Observable<any> {
  //   const ref = doc(this.firestore, 'Users', user.uid);
  //   return from(updateDoc(ref, { ...user }));
  // }
}
