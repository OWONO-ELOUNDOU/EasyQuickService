import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { AuthService } from '../../services/Auth/auth.service';
import { DohoneCart } from '../../models/dohone-cart';
import { DohoneService } from '../../services/Dohone/dohone.service';
import { HttpClient } from '@angular/common/http';
import { TaskForm } from '../../models/task-form';

@Component({
  selector: 'app-dohone',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './dohone.component.html',
  styleUrl: './dohone.component.css'
})
export class DohoneComponent {

  service: TaskForm = JSON.parse(localStorage.getItem('task') || '{}');
  price = '3000';
  dohone_rH = "DF216B76193067807036203";
  dohone_endPoint = "https://my-dohone.com/dohone/pay";
  
  user$ = this.authService.currentUser$;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private _http: HttpClient,
    private dohoneService: DohoneService
  ){}

  ngOnInit() {
    console.log(this.service);
  }

  // checkoutForm: any = {
  //   rN: '',
  //   rE: '',
  //   rT: '',
  //   rI: '',
  //   cmd: 'start',
  //   rDvs: 'XAF',
  //   rH: this.dohone_rH,
  //   rMt: this.price,
  //   rLocale: 'fr',
  //   motif: "Paiement d'un article sur EasyQuickService",
  //   source: 'DIGITAL DIRECT ASSISTANCE',
  //   endPage: 'https://easyquickservice-551c7.web.app/service',
  //   cancelPage: 'https://easyquickservice-551c7.web.app/dohone',
  //   notifyPage: 'https://easyquickservice-551c7.web.app/dohone',
  //   logo: 'https://windows237.net/assets/Images/icon/logo.png',
  // }

  checkoutForm: any = this.formBuilder.group({
    rN: '',
    rE: '',
    rT: '',
    rI: '',
    cmd: 'start',
    rDvs: 'XAF',
    rH: this.dohone_rH,
    rMt: this.price,
    rLocale: 'fr',
    motif: "Paiement d'un article sur EasyQuickService",
    source: 'DIGITAL DIRECT ASSISTANCE',
    endPage: 'https://easyquickservice-551c7.web.app/service',
    cancelPage: 'https://easyquickservice-551c7.web.app/dohone',
    notifyPage: 'https://easyquickservice-551c7.web.app/dohone',
    logo: 'https://windows237.net/assets/Images/icon/logo.png',
  });

  onSubmit() {
    // this._http.post('https://easyquickservice-551c7-default-rtdb.firebaseio.com/Transactions.json', this.checkoutForm.value).subscribe((res) => {
    //   const transaction = JSON.parse(JSON.stringify(res));

    //   this.checkoutForm.patchValue({
    //     rI: transaction.name,
    //   });

    //   const formValue = this.checkoutForm.value;
    //   const params = new URLSearchParams(formValue.toString());
    //   window.location.href = this.dohone_endPoint+'?'+params.toString();
    // })

    this.dohoneService.saveOrder(this.checkoutForm.value).subscribe((res) => {
      console.log(res);
      // const transaction = JSON.parse(JSON.stringify(res));

      
      const params = new URLSearchParams(this.checkoutForm.value);
      window.location.href = this.dohone_endPoint + '?' + params.toString();
    }, (error) => {
      console.log(error)
    })
  }

}
