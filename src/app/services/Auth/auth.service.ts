import { Injectable } from "@angular/core";
import {
  Auth,
  authState,
  updateProfile,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  UserInfo,
} from "@angular/fire/auth";
import { Firestore, addDoc, collection, doc, setDoc } from "@angular/fire/firestore";
import { Observable, concatMap, from, pipe, switchMap, of } from "rxjs";
import { ProfileUser } from "../../Auth/model/profile-user";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    private firestore: Firestore,
    private auth: Auth,
  ) {}

  currentUser$ = authState(this.auth);

  login(email: string, password: string) {
    // Simulates a call to the server for authentication.
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  logout() {
    return from(this.auth.signOut());
  }

  signUp(email: string, password: string) {
    // SignUp using @angular/fire module
    return from(createUserWithEmailAndPassword(this.auth, email, password))
  }

  updateProfileData(profileData: Partial<UserInfo>): Observable<any> {
    const user = this.auth.currentUser;
    return of(user).pipe(
      concatMap(user => {
        if (!user) throw new Error('Not Authenticated');

        return updateProfile(user, profileData);
      })
    )
  }
}
