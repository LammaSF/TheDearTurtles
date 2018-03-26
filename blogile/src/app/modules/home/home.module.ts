import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { BlogModule } from '../blog/blog.module';
import { SharedModule} from "../shared/shared.module";
import { NewsModule } from '../news/news.module';
import { StatisticsComponent} from "../shared/statistics/statistics.component";



@NgModule({
  imports: [
    CommonModule,
    BlogModule,
    NewsModule,
    SharedModule,
    RouterModule,

  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
