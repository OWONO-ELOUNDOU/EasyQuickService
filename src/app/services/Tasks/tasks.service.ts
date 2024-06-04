import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Database, child, get, ref } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(
    private auth: Auth,
    private database: Database
  ) { }

  // Function to get all tasks
  getAllTasks() {
    const dbRef = ref(this.database);
    get(child(dbRef, 'Tasks/forms')).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        return snapshot.val();
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.log(error);
    })
  }

}
