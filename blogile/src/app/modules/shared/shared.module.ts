import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Routes, RouterModule } from '@angular/router';

import { NavComponent } from './nav/nav.component';
import { SearchBarComponent } from './nav/search-bar/search-bar.component';
import { UserBarComponent } from './nav/user-bar/user-bar.component';
import { Error404Component } from './error404/error404.component';


const errorRoutes: Routes = [
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(errorRoutes)
  ],
  declarations: [
    NavComponent,
    SearchBarComponent,
    UserBarComponent,
    Error404Component
  ],
  exports: [
    NavComponent
  ]
})
export class SharedModule { }
