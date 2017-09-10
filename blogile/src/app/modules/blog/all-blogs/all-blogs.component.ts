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
  @Input() myBlogs: any;

  constructor(private auth: AuthService,
    private blogsDataService: BlogData) { }

  ngOnInit() {
    if (!this.myBlogs) {
      this.blogsDataService.getAllBlogs()
        .subscribe(items => {
          this.blogs = items;
          items.map(item => {
            const authorName = item.authorName;
            const blogTitle = item.title;
            const blogDescription = item.description;
            const createdOn = item.createdOn;
            const image = item.image ? item.image.url : '';
            const blogId = item.$key;
          });
        });
    } else {
      this.blogs = this.myBlogs;
    }
  }
}
