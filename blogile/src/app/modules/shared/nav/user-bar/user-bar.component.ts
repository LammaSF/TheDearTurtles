import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../../services/auth/auth.service';

import { Router } from '@angular/router';
import { UserData } from '../../../../services/user/user.data.service';

@Component({
  selector: 'app-user-bar',
  templateUrl: './user-bar.component.html',
  styleUrls: ['./user-bar.component.scss']
})
export class UserBarComponent implements OnInit {
  public isAuthenticated: boolean;
  public userProfileImageUrl;

  constructor(private auth: AuthService, private router: Router, private userService: UserData) { }

  ngOnInit() {
    this.auth.authUpdated
    .subscribe((res) => {
      this.isAuthenticated = res;
      if (this.isAuthenticated) {
        this.userService.getUserByUid(this.auth.currentUserId).
          subscribe((user) => this.userProfileImageUrl = user.profileImage.url);
      }
});
  }
  signIn() {
    this.router.navigateByUrl('/auth/sign-in');
  }
  signOut() {
    this.auth.signOut();
  }
}
