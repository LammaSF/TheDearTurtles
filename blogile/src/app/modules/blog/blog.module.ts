import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';
import { BlogRoutesModule } from './blog.routes.module';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutesModule
  ],
  declarations: [
    BlogComponent,
    CreateBlogComponent,
    ViewBlogComponent,
  ]
})
export class BlogModule { }
