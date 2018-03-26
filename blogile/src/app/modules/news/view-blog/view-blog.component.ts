import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogData } from '../../../services/blog/blog.data.service';
import {NewsData} from "../../../services/news/news.data.service";

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.scss']
})
export class ViewBlogComponent implements OnInit {
  @Input()
  public blog;

  @Input()
  public blogId: string;

  public userId: string;

  public blogKey;


  constructor(
    private route: ActivatedRoute,
    private newsDataService: NewsData,
    private router: Router,
    private auth: AuthService) { }

  ngOnInit() {
    this.userId = localStorage.getItem('authkey');

    this.route.params
        .subscribe(params => {
            this.newsDataService.getBlogById(params.id)
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

  isAuthor(authorId: string) {
    if (this.userId === authorId) {
      return true;
    }

    return false;
  }


}
