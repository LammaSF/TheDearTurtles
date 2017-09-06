import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule } from '@angular/router';

import { NavComponent } from './nav/nav.component';
import { SearchBarComponent } from './nav/search-bar/search-bar.component';
import { UserBarComponent } from './nav/user-bar/user-bar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NavComponent,
    SearchBarComponent,
    UserBarComponent
  ],
  exports: [
    NavComponent
  ]
})
export class SharedModule { }
