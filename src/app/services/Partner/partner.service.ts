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
    return set(ref(this.database, 'Partners/' + partner.firstName), {
      firstName: partner.firstName,
      lastName: partner.lastName,
      email: partner.email,
      password: partner.password,
      phone: partner.phone,
      activities: partner.activities,
      twon: partner.twon,
      region: partner.region,
      terms: true
    })
  }
}
