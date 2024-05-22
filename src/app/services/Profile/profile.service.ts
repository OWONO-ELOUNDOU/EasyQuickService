import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getDownloadURL, ref, Storage, uploadBytes } from '@angular/fire/storage';
import { from, Observable, switchMap, of, concatMap } from 'rxjs';
import { TaskForm } from '../../models/task-form';
import { AuthService } from '../Auth/auth.service';
import { Database } from '@angular/fire/database';
import { Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private readonly endPoint = "https://easyquickservice-551c7-default-rtdb.firebaseio.com/";

  constructor(
    private storage: Storage,
    private database: Database,
    private http: HttpClient,
    private authService: AuthService,
    private auth: Auth
  ) { }

  userId = this.auth.currentUser?.uid;

  uploadImage(image: File, path: string): Observable<string> {
    const storageRef = ref(this.storage, path);
    const uploadTask = from(uploadBytes(storageRef, image));
    return uploadTask.pipe(
      switchMap((result) => getDownloadURL(result.ref))
    );
  }

  getTasks() {
    return this.http.get<{[key : string]: TaskForm}>(`${this.endPoint}/Tasks/forms.json`)
  }

    
}
