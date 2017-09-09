import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BlogComponent,
    CreateBlogComponent,
    ViewBlogComponent,
  ]
})
export class BlogModule { }
