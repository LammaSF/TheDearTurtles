import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics.component';
import { StatisticsRoutesModule } from './statistics.routes.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    StatisticsRoutesModule,
    RouterModule,
  ],
  exports: [
  ],
  declarations: [
    StatisticsComponent
  ]
})
export class StatisticsModule { }
