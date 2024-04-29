import { Injectable } from '@angular/core';
import { DohoneCart } from '../../models/dohone-cart';
import { TaskForm } from '../../models/task-form';

@Injectable({
  providedIn: 'root'
})
export class DohoneService {

  constructor() { }

  items: DohoneCart[] = [];

}
