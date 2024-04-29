import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  sendNotification(logo: string, message: string) {
    Notification.requestPermission().then(perm => {
      if(perm === "granted") {
        const notification = new Notification("Notification", {
          icon: logo,
          body: message,
          data: {}
        });
      }
    })
  }
}
