import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { AllBlogsComponent } from './all-blogs/all-blogs.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';
import {StatisticsComponent} from "../shared/statistics/statistics.component";
import {MyBlogsComponent} from "./my-blogs/my-blogs.component";

const blogRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'all', component: AllBlogsComponent },
  { path: 'create', canActivate: [AuthGuard], component: CreateBlogComponent },
  { path: 'blog/:id', component: ViewBlogComponent },
  { path: 'myblogs', component: MyBlogsComponent },
  { path: 'statistics', component: StatisticsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(blogRoutes)
  ],
  exports: [
    RouterModule,
  ]
})
export class BlogRoutesModule { }
