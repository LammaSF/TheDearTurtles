import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { NewsData } from '../../../services/news/news.data.service';

@Component({
  selector: 'news-blogs',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  providers: [NewsData]
})
export class NewsComponent implements OnInit {
  public news;

  constructor(private auth: AuthService,
              private newsDataService: NewsData) { }

  ngOnInit() {
    this.newsDataService.getAllBlogs()
      .subscribe(items => {
        this.news = items;
      });
  }

}
