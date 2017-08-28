import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthService } from './services/auth/auth.service';
// import { NotificationsService } from './services/notifications/notifications.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent  /* implements OnInit */ {
  items: FirebaseListObservable<any[]>;
  // public toastrInit: object;

  constructor(public auth: AuthService, private db: AngularFireDatabase, ) {
    this.items = db.list('/items');
  }

  // ngOnInit(): void {
  //   this.toastrInit = this.notificationsService.toasterConfig;
  // }
}
