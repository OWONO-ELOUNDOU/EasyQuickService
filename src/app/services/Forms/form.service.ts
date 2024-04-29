import { Injectable } from '@angular/core';
import { TaskForm } from '../../models/task-form';
import { Database, set, ref } from '@angular/fire/database';
import { ProfileUser } from '../../Auth/model/profile-user';
import { Auth } from '@angular/fire/auth';
import { AuthService } from '../Auth/auth.service';
import { switchMap, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(
    private auth : Auth,
    private authService: AuthService,
    private database: Database
  ) { }

  addTask(task: TaskForm) {
    return this.authService.currentUser$.pipe(
      switchMap(user => {
        if (!user?.uid) {
          return of(null);
        } else {
          return set(ref(this.database, `Tasks/forms/` + task.type), {
            username: user.displayName,
            email: user.email,
            userId: user.uid,
            type: task.type,
            object: task.object,
            quality: task.quality,
            description: task.description,
            natureJurid: task.natureJurid,
            service: task.service,
            localisation: task.localisation,
            creationDate: task.creationDate
          });
        };
      })
    );
  }

  // addForm(form: TaskForm, uid: string): Observable<any> {
  //   const ref = doc(this.firestore, 'Services', uid);
  //   return from(setDoc(ref, form));
  // }
}
