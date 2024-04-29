import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Database } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(
    private auth: Auth,
    private database: Database
  ) { }

}
