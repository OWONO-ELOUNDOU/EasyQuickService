import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  constructor(
    private firestore: Firestore
  ) { }

  addPartner(partner: User) {
    const partnerCollection = collection(this.firestore, 'Partners');
    addDoc(partnerCollection, partner);
  }
}
