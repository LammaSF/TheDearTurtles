import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { StatisticsComponent } from './statistics.component';


const statisticsRoutes: Routes = [
  { path: 'statistics', component: StatisticsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(statisticsRoutes)
  ],
  exports: [
    RouterModule,
  ]
})
export class StatisticsRoutesModule { }
