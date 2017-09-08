import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutesModule } from './about.routes.module';
import { RouterModule } from '@angular/router';
import {AboutComponent} from "./about.component";

@NgModule({
  imports: [
    CommonModule,
    AboutRoutesModule,
    RouterModule
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
