import { Injectable } from '@angular/core';
import { Firestore, doc, docData, setDoc, updateDoc } from '@angular/fire/firestore';
import { ProfileUser } from '../model/profile-user';
import { Observable, from, of, switchMap } from 'rxjs';
import { AuthService } from '../../services/Auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  get currentUserProfile$(): Observable<ProfileUser | null> {
    return this.authService.currentUser$.pipe(
      switchMap(user => {
        
        if(!user?.uid) {
          return of(null);
        } else {
          const ref = doc(this.firestore, 'users', user?.uid);
          return docData(ref) as Observable<ProfileUser>;
        }

      })
    )
  }

  constructor(
    private firestore: Firestore,
    private authService: AuthService
  ) { }

  addUser(user: ProfileUser): Observable<any> {
    const ref = doc(this.firestore, 'Users', user.uid);
    return from(setDoc(ref, user));
  }

  updateUser(user: ProfileUser): Observable<any> {
    const ref = doc(this.firestore, 'Users', user.uid);
    return from(updateDoc(ref, { ...user }));
  }
}
