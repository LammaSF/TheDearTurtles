import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { StatisticsComponent } from './statistics/statistics.component';


const sharedRoutes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'statistics', component: StatisticsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(sharedRoutes)
  ],
  exports: [
    RouterModule,
  ]
})
export class SharedRoutesModule { }
