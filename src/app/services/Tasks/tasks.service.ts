import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Database, child, get, ref } from '@angular/fire/database';
import { TaskForm } from '../../models/task-form';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private readonly firebaseEndPoint = 'https://easyquickservice-551c7-default-rtdb.firebaseio.com/';

  constructor(
    private database: Database,
    private http: HttpClient
  ) { }

  // Function to get all tasks
  // getAllTasks() {
  //   const dbRef = ref(this.database);
  //   return get(child(dbRef, 'Tasks/forms')).then((snapshot) => {
  //     if (snapshot.exists()) {
  //       return snapshot.val();
  //     } else {
  //       console.log("No data available");
  //     }
  //   }).catch((error) => {
  //     console.log(error);
  //   })
  // }

  getAllTasks() {
    return this.http.get<any[]>(`${this.firebaseEndPoint}/Tasks/forms.json`);
  }

}
