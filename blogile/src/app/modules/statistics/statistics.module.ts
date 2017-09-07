import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics.component';
import { StatisticsRoutesModule } from './statistics.routes.module';

@NgModule({
  imports: [
    CommonModule,
    StatisticsRoutesModule
  ],
  exports: [
    StatisticsComponent,
  ],
  declarations: [
    StatisticsComponent
  ]
})
export class StatisticsModule { }
