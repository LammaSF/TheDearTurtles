import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import { AuthGuard } from '../../guards/auth.guard';


const userRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'profile', canActivate: [AuthGuard], component: UserComponent },
  { path: 'edit-profile', canActivate: [AuthGuard],  component: EditProfileComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule,
  ]
})
export class UserRoutesModule { }
