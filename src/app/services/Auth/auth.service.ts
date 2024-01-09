import { Injectable } from '@angular/core';
import { Database, set, ref } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public database: Database
  ) { }

  login() {
    // Simulates a call to the server for authentication.
  };

  signup() {

  }

  createUser() {

  }
}
