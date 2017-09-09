import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { UserData } from '../../services/user/user.data.service';
import { UserInterface } from '../../models/contracts/user.interface';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public user: UserInterface;
  public userId: string;
  // public isLoaded: Promise<boolean>;

  constructor(private auth: AuthService, private userService: UserData) { }

  ngOnInit() {
    this.userId = this.auth.currentUserId || localStorage.authkey;

    this.userService
    .getUserByUid(this.userId)
    .subscribe((res) => {
      this.user = res;
      this.userId = this.auth.currentUserId;
    });
  }
}
