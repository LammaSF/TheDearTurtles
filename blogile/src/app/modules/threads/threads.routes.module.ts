import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';
import { CreateThreadComponent } from './create-thread/create-thread.component';
import { BlogAuthorGuard } from '../../guards/blog.author.guard';


const threadsRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'create', canActivate: [BlogAuthorGuard], component: CreateThreadComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(threadsRoutes)
  ],
  exports: [
    RouterModule,
  ]
})
export class ThreadsRoutesModule { }
