import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  items: FirebaseListObservable<any[]>;

  constructor(public auth: AuthService, private db: AngularFireDatabase) {
    this.items = db.list('/items');
  }
}
