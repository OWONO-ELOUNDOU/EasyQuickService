import { Injectable } from '@angular/core';
import { ContactForm } from '../../models/contact-form';
import { Database, ref, set } from '@angular/fire/database';
import { Auth } from '@angular/fire/auth';
import { AuthService } from '../Auth/auth.service';
import { switchMap, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private auth: Auth,
    private authService: AuthService,
    private database: Database
  ) { }

  userId = this.auth.currentUser?.uid;

  saveMessage(message: ContactForm) {
    return this.authService.currentUser$.pipe(
      switchMap(user => {
        if(!user?.uid) {
          return of(null);
        }
        else {
          return set(ref(this.database, `Messages/${user.uid}/feedbacks/` + message.content), {
            username: message.username,
            email: message.email,
            content: message.content
          })
        }
      })
    )
  }

  addMessage(message: ContactForm) {
    return set(ref(this.database, `Messages/${this.userId}/feedBacks/` + message.content), {
      username: message.username,
      email: message.email,
      content: message.content
    })
  }

}
