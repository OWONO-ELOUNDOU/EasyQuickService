import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { ContactForm } from '../../models/contact-form';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private firestore: Firestore
  ) { }

  addMessage(message: ContactForm) {
    const messageCollection = collection(this.firestore, 'test');
    addDoc(messageCollection, message);
  }
}
