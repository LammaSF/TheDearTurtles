import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogData } from '../../../services/blog/blog.data.service';

@Component({
  selector: 'app-my-blogs',
  templateUrl: './my-blogs.component.html',
  styleUrls: ['./my-blogs.component.scss']
})
export class MyBlogsComponent implements OnInit {

  @Input()
  public blog;

  @Input()
  public blogId: string;

  public userId: string;

  public blogKey;


  constructor(
    private route: ActivatedRoute,
    private blogDataService: BlogData,
    private router: Router,
    private auth: AuthService) { }

  ngOnInit() {
    this.userId = localStorage.getItem('authkey');

    this.route.params
      .subscribe(params => {
        this.blogDataService.getBlogById(params.id)
          .subscribe(blog => {
            console.log(params.id);
            this.blog = blog;
            this.blogKey = blog.$key;
          });
      });
  }

  isAuthenticated() {
    return this.auth.isAuthenticated;
  }

}
