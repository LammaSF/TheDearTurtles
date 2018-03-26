import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CreateBlogComponent } from './create-blog/create-blog.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';

import { NewsRoutesModule } from './news.routes.module';
import {NewsComponent} from "./news/news.component";
import {SharedModule} from "../shared/shared.module";
import {NewsData} from "../../services/news/news.data.service";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    NewsRoutesModule,
  ],
  declarations: [
    CreateBlogComponent,
    ViewBlogComponent,
    NewsComponent,
  ],
  providers: [NewsData],
  exports: [
  ]
})
export class NewsModule { }
