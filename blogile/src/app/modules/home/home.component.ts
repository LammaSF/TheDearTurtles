import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { UserData } from '../../services/user/user.data.service';
import { BlogData } from '../../services/blog/blog.data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {
  public myBlogs;
  public user;
  public userId;
  public isAuthenticated: boolean;

  constructor(private auth: AuthService,
    private userService: UserData,
    private blogsDataService: BlogData) { }

  ngOnInit() {
    this.userId = this.auth.currentUserId || localStorage.authkey;

    this.userService
      .getUserByUid(this.userId)
      .subscribe((res) => {
        this.user = res;
        this.userId = this.auth.currentUserId;
      });

    if (this.user) {
      const userId = this.userId;

      this.blogsDataService.getAllBlogs()
        .subscribe(items => {
          this.myBlogs = items;
          items
            .filter(x => x.userId === userId)
            .map(item => {
              const authorName = item.authorName;
              const blogTitle = item.title;
              const blogDescription = item.description;
              const createdOn = item.createdOn;
              const image = item.image ? item.image.url : '';
              const blogId = item.$key;
            });
        });
    }
  }
}
