import { Injectable } from '@angular/core';
import { ContactForm } from '../../models/contact-form';
import { Database, ref, set } from '@angular/fire/database';
import { Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private auth: Auth,
    private database: Database
  ) { }

  userId = this.auth.currentUser?.uid;

  addMessage(message: ContactForm) {
    return set(ref(this.database, `Messages/${this.userId}/feedBacks/` + message.content), {
      username: message.username,
      email: message.email,
      content: message.content
    })
  }

}
