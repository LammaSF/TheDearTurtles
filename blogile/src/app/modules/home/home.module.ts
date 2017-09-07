import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SideNavModule } from './side-nav/side-nav.module';
import { StatisticsModule} from "../statistics/statistics.module";
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SideNavModule,
    StatisticsModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
