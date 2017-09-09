import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './comment/comment.component';
import { CreateThreadComponent } from './create-thread/create-thread.component';
import { ViewThreadComponent } from './view-thread/view-thread.component';
import { ThreadComponent } from './thread/thread.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ThreadComponent,
    CreateThreadComponent,
    ViewThreadComponent,
    CommentComponent
  ]
})
export class ThreadModule { }
