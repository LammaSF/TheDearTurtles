import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';

import { AppComponent } from '../../app.component';
import { UserModule } from '../user/user.module';

import { Error404Component } from '../shared/error404/error404.component';

const rootRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'auth', loadChildren: '../auth/auth.module#AuthModule'},
  { path: 'user', loadChildren: '../user/user.module#UserModule'},
  { path: 'shared', loadChildren: '../shared/shared.module#SharedModule'},
  { path: 'blog', loadChildren: '../blog/blog.module#BlogModule'},
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(rootRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutesModule { }
