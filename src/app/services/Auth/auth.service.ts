import { Injectable } from "@angular/core";
import {
  Auth,
  authState,
  updateProfile,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  UserInfo,
} from "@angular/fire/auth";
import {Observable, concatMap, from, of, switchMap} from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    private auth: Auth,
  ) {}

  // Get the current auth state
  currentUser$ = authState(this.auth);

  // Function to log In the user
  login(username: any, password: any) {
    return from(signInWithEmailAndPassword(this.auth, username, password));
  }

  // Function to log out the user
  logout() {
    return from(this.auth.signOut());
  }

  // Function to sign Up the user
  signUp(email: any, password: any) {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }

  // Update the user profile data
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
