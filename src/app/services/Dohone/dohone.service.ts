import { Injectable } from '@angular/core';
import { DohoneCart } from '../../models/dohone-cart';
import { TaskForm } from '../../models/task-form';
import { HttpClient } from '@angular/common/http';
import { Database, ref, set } from '@angular/fire/database';
import { AuthService } from '../Auth/auth.service';
import { switchMap, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DohoneService {

  private readonly dohoneEndPoint = 'https://my-dohone.com/dohone/pay';
  private readonly databaseEndPoint = 'https://easyquickservice-551c7-default-rtdb.firebaseio.com/Transactions.json';

  constructor(
    private _http: HttpClient,
    private database: Database,
    private authService: AuthService
  ) { }

  items: TaskForm[] = [];

  addToCart(service: TaskForm) {
    this.items.push(service);
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  getCount() {
    let items: TaskForm[] = JSON.parse(localStorage.getItem('cart') || '');
    return items.length;
  }

  getUserId() {
    return this.authService.currentUser$.pipe(
      switchMap(user => {
        if(!user?.uid){
          return of(null);
        } else {
          return user.uid as string;
        }
      })
    )
  }

  createOrderId() {
    return  Math.random().toString(36).substr(2, 16);
  }

  saveOrder(checkout: any) {
    return this.authService.currentUser$.pipe(
      switchMap(user => {
        if (!user?.uid) {
          return of(null);
        } else {
          return set(ref(this.database, 'Transactions/' + this.createOrderId()), {
            clientId: user.uid,
            clientName: checkout.rN,
            email: checkout.rE,
            phoneNumber: checkout.rT,
            price: checkout.rMt,
            motif: checkout.motif
          })
        }
      })
    )
  }

  // saveOrder(checkout: any, userId: string) {
  //   return set(ref(this.database, 'Transactions/'), {
  //     clientId: userId,
  //     clientName: checkout.rN,
  //     email: checkout.rE,
  //     phoneNumber: checkout.rI,
  //     price: checkout.rMt,
  //     motif: checkout.motif
  //   })
  // }

}
