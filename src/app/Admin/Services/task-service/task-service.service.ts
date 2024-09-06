import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskForm } from '../../../models/task-form';
import { Database, ref, update } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  private readonly firebaseDatabaseEndpoint = 'https://easyquickservice-551c7-default-rtdb.firebaseio.com';

  constructor(
    private http: HttpClient,
    private database: Database
  ) { }

  getAllTasks(): Observable<TaskForm[]> {
    return this.http.get<TaskForm[]>(this.firebaseDatabaseEndpoint + '/Tasks.json');
  }

  updateTaskStatus(id: string, status: string) {
    return update(ref(this.database, `Tasks/${id}`), {
      status: status
    });
  }

  deleteTaskData(id: string) {
    return this.http.delete(`${this.firebaseDatabaseEndpoint}/Tasks/${id}`);
  }
}
