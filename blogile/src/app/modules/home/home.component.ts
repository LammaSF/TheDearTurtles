import { Component, OnInit, Output } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { UserData } from '../../services/user/user.data.service';
import { BlogData } from '../../services/blog/blog.data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {
  public blogs;

  public user;
  public userId;
  public isAuthenticated: boolean;

  constructor(private auth: AuthService,
    private userService: UserData,
    private blogsDataService: BlogData) { }

  ngOnInit() {
    this.userId = localStorage.authkey;
    this.auth.currentUserObservable.subscribe((res) => {
      this.isAuthenticated = res ? true : false;
    });

    // this.blogsDataService.getAllBlogs()
    //   .subscribe(items => {
    //     this.blogs = items.filter(x => x.userId === this.userId);
    // });
  }
}
