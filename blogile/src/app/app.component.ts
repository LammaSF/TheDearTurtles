import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthService } from './services/auth/auth.service';
import { NotificationService } from './services/notifications/notifications.service';

import { ToasterConfig } from 'angular2-toaster/angular2-toaster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent  implements OnInit {
  items: FirebaseListObservable<any[]>;
  public toasterconfig: object;

  constructor(public auth: AuthService, private db: AngularFireDatabase, private notificationService: NotificationService) {
    this.items = db.list('/items');
  }

  ngOnInit(): void {
    this.toasterconfig = this.notificationService.toasterconfig;
  }
}
