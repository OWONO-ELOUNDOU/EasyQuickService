import { Injectable } from '@angular/core';
import { switchMap, of, Observable } from 'rxjs';
import { Auth } from '@angular/fire/auth';
import { Database, set, ref, onValue, get, child } from '@angular/fire/database';

import { TaskForm } from '../../models/task-form';
import { AuthService } from '../Auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(
    private auth : Auth,
    private authService: AuthService,
    private database: Database
  ) { }

  // Function to create unique Id form each task
  createOrderId() {
    return  Math.random().toString(36).substr(2, 9);
  }

  // Function to save task in database
  addTask(task: TaskForm) {
    return this.authService.currentUser$.pipe(
      switchMap(user => {
        if (!user?.uid) {
          return of(null);
        } else {
          return set(ref(this.database, `Tasks/forms/${user.uid}/${task.type}-${this.createOrderId()}`), {
            // username: user.displayName,
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
  };

}
