import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SideNavModule } from './side-nav/side-nav.module';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SideNavModule,
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
