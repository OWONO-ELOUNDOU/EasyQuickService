import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {switchMap, of, Observable, from} from 'rxjs';
import {Database, getDatabase, set, ref, get, child} from '@angular/fire/database';

import { AuthService } from '../../services/Auth/auth.service';
import {User} from "../../models/user";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly databaseEndPoint = 'https://easyquickservice-551c7-default-rtdb.firebaseio.com';

  // Get current user Data
  // get currentUserData$(): Observable<User | null> {
  //   return this.authService.currentUser$.pipe(
  //     switchMap((user) => {
  //       if (!user?.uid) {
  //         return of(null);
  //       } else {
  //         const dbRef = ref(getDatabase());
  //         let userData: any;
  //         get(child(dbRef, `Users/${user.uid}`)).then((snapshot) => {
  //           if (snapshot.exists()) {
  //             userData = snapshot.val();
  //           } else {
  //             console.log('No Data Available');
  //           }
  //         })

  //         return userData as Observable<User>
  //       }
  //     })
  //   )
  // }

  constructor(
    private database: Database,
    private authService: AuthService,
    private http: HttpClient
  ) { }


  // Function to add new user to firebase realtime database
  addUser(userId: string,  user: any) {
    return set(ref(this.database, 'Users/' + userId), {
      userId: userId,
      firstName: user.firstName,
      lastName: user.lastName,
      displayName: user.firstName + ' ' + user.lastName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      address: user.streetAddress,
      twon: user.twon,
      role: user.role,
      region: user.region
    })
  }
}
