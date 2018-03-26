import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AllBlogsComponent } from './all-blogs/all-blogs.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';

import { BlogRoutesModule } from './blog.routes.module';
import {SharedModule} from "../shared/shared.module";
import {MyBlogsComponent} from "./my-blogs/my-blogs.component";



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    BlogRoutesModule,
  ],
  declarations: [
    AllBlogsComponent,
    CreateBlogComponent,
    ViewBlogComponent,
    MyBlogsComponent

  ],

  exports: [
  ]
})
export class BlogModule { }
