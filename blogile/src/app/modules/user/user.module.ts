import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
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
    EditProfileComponent,

  ]
})
export class UserModule { }
