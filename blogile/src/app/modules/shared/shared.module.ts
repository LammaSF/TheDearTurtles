import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Routes, RouterModule } from '@angular/router';
import { SharedRoutesModule } from './shared.routes.module';

import { NavComponent } from './nav/nav.component';
import { SearchBarComponent } from './nav/search-bar/search-bar.component';
import { UserBarComponent } from './nav/user-bar/user-bar.component';
import { Error404Component } from './error404/error404.component';
import { AboutComponent } from './about/about.component';
import { StatisticsComponent } from './statistics/statistics.component';


@NgModule({
  imports: [
    CommonModule,
    SharedRoutesModule
  ],
  declarations: [
    NavComponent,
    SearchBarComponent,
    UserBarComponent,
    Error404Component,
    AboutComponent,
    StatisticsComponent
  ],
  exports: [
    NavComponent,
    Error404Component
  ]
})
export class SharedModule { }
