import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';
import {NewsComponent} from "./news/news.component";
import {StatisticsComponent} from "../shared/statistics/statistics.component";

const newsRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'create', canActivate: [AuthGuard], component: CreateBlogComponent },
  { path: 'blog/:id', component: ViewBlogComponent },
  { path: 'news', component: NewsComponent },
  { path: 'news/create', canActivate: [AuthGuard], component: CreateBlogComponent },
  { path: 'news/:id', component: ViewBlogComponent },
  { path: 'statistics', component: StatisticsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(newsRoutes)
  ],
  exports: [
    RouterModule,
  ]
})
export class NewsRoutesModule { }
