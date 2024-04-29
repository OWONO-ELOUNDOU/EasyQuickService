import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { Database, ref, set } from '@angular/fire/database';
import { AuthService } from '../Auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  constructor(
    private authService: AuthService,
    private database: Database
  ) { }

  addPartner(partner: User) {
    return set(ref(this.database, 'Partner/' + partner.email), {
      firstName: partner.firstName,
      lastName: partner.lastName,
      email: partner.email,
      password: partner.password,
      phone: partner.phone,
      address: partner.street,
      twon: partner.twon,
      country: partner.country,
      terms: 'I agree to the conditions and policy'
    })
  }

  // addPartner(partner: User) {
  //   const partnerCollection = collection(this.firestore, 'Partners');
  //   addDoc(partnerCollection, partner);
  // }
}
