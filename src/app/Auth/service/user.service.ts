import { Injectable } from '@angular/core';
import { Firestore, doc, docData, setDoc, updateDoc } from '@angular/fire/firestore';
import { ProfileUser } from '../model/profile-user';
import { Observable, from, of, switchMap } from 'rxjs';
import { AuthService } from '../../services/Auth/auth.service';
import { Database, set, ref } from '@angular/fire/database';
import { onValue } from 'firebase/database';
import { Auth } from '@angular/fire/auth';

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
    private auth: Auth,
    private database: Database,
    private authService: AuthService
  ) { }
  

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
