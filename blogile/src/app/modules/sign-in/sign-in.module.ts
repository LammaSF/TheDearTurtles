import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignInComponent } from './sign-in.component';
import { RoutesModule } from '../routes/routes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RoutesModule,
  ],
  exports: [
    SignInComponent
  ],
  declarations: [
    SignInComponent,
  ]
})
export class SignInModule { }
