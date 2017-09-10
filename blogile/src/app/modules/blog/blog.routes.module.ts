import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { AllBlogsComponent } from './all-blogs/all-blogs.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';

const blogRoutes: Routes = [
  { path: '', redirectTo: 'all-blogs', pathMatch: 'full' },
  { path: 'all-blogs', component: AllBlogsComponent },
  { path: 'create', canActivate: [AuthGuard], component: CreateBlogComponent },
  { path: 'blog/:id', component: ViewBlogComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(blogRoutes)
  ],
  exports: [
    RouterModule,
  ]
})
export class BlogRoutesModule { }
