import { Injectable } from '@angular/core';
import { switchMap, of } from 'rxjs';
import { Database, set, ref } from '@angular/fire/database';

import { AuthService } from '../Auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(
    private authService: AuthService,
    private database: Database
  ) { }

  // Function to create unique id for each task
  createOrderId() {
    return  Math.random().toString(36).substr(2, 9);
  }

  // Function to save form in database
  addTask(task: any) {
    return this.authService.currentUser$.pipe(
      switchMap(user => {
        if (!user?.uid) {
          return of(null);
        } else {
          const taskId = this.createOrderId();
          return set(ref(this.database, `Tasks/${task.type}-${taskId}`), {
            id: task.type + '-' + taskId,
            userId: user.uid,
            username: task.username,
            email: task.email,
            type: task.type,
            object: task.object,
            quality: task.quality,
            description: task.description,
            natureJuridique: task.natureJuridique,
            office: task.office,
            localisation: task.localisation,
            creationDate: task.creationDate
          });
        }
      })
    );
  };

}
