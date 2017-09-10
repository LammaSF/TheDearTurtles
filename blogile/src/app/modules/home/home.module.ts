import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { BlogModule } from '../blog/blog.module';


@NgModule({
  imports: [
    CommonModule,
    BlogModule,
    RouterModule,
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
