import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { AllBlogsComponent } from './all-blogs/all-blogs.component';

const blogRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'create', canActivate: [AuthGuard], component: CreateBlogComponent },
  { path: 'all-blogs', component: AllBlogsComponent }
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
