import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Database, child, get, ref } from '@angular/fire/database';
import { TaskForm, TaskGroup } from '../../models/task-form';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../Auth/auth.service';
import { Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private readonly firebaseEndPoint = 'https://easyquickservice-551c7-default-rtdb.firebaseio.com/';
  private readonly testUsersEndpoint = 'database/users.json';
  private readonly testTasksEndpoint = 'database/tasks.json';

  constructor(
    private database: Database,
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getAllTasks(): Observable<TaskForm[]> {
    return this.http.get<TaskForm[]>(`${this.testTasksEndpoint}`);
  }
  
  getTaskDetails(taskId: string) {
    return this.http.get<TaskForm>(`${this.testTasksEndpoint}/${taskId}`);
  }

  getUserTasks() {
    return this.authService.currentUser$.pipe(
      switchMap(user => {
        if (!user?.uid) {
          return of(null);
        } else {
          return this.http.get<TaskForm[]>(`${this.firebaseEndPoint}/Tasks/forms/${user.uid}.json`);
        }
      })
    )
  }

}
