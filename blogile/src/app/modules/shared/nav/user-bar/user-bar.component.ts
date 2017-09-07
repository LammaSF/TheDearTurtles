import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../../services/auth/auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-user-bar',
  templateUrl: './user-bar.component.html',
  styleUrls: ['./user-bar.component.scss']
})
export class UserBarComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit() {
  }
  signIn() {
    this.router.navigateByUrl('/auth/sign-in');
  }
  signOut() {
    this.auth.signOut();
  }
}
