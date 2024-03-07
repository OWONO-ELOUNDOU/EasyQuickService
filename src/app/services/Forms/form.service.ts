import { Injectable } from '@angular/core';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { TaskForm } from '../../models/task-form';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(
    private firestore: Firestore
  ) { }

  addForm(form: TaskForm): Observable<any> {
    const ref = doc(this.firestore, 'Services', form.type);
    return from(setDoc(ref, form));
  }
}
