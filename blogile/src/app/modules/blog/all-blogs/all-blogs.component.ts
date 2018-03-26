import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { BlogData } from '../../../services/blog/blog.data.service';

@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.scss']
})
export class AllBlogsComponent implements OnInit {
  public blogs;

  constructor(private auth: AuthService,
              private blogsDataService: BlogData) { }

  ngOnInit() {
    this.blogsDataService.getAllBlogs()
      .subscribe(items => {
        this.blogs = items;
      });
  }
}
