import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user.component';
import { UserRoutesModule } from './user.routes.module';


@NgModule({
  imports: [
    CommonModule,
    UserRoutesModule
  ],
  exports: [
    UserComponent,
  ],
  declarations: [
    UserComponent,
  ]
})
export class UserModule { }
