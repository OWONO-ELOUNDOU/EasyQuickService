import { Injectable } from '@angular/core';
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

  addPartner(uid: string, partner: any) {
    return set(ref(this.database, 'Users/' + uid), {
      userId: uid,
      firstName: partner.firstName,
      lastName: partner.lastName,
      email: partner.email,
      password: partner.password,
      phoneNumber: partner.phoneNumber,
      activities: partner.activities,
      twon: partner.twon,
      region: partner.region,
      role: partner.role,
      terms: true
    })
  }
}
