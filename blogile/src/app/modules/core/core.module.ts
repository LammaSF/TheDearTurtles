import { NgModule, Optional, SkipSelf } from '@angular/core';

import { UserData } from '../../services/user/user.data.service';

import { AuthService } from '../../services/auth/auth.service';
import { AuthGuard } from '../../guards/auth.guard';

import { UploadService } from '../../services/uploads/upload.service';
import { NotificationService } from '../../services/notifications/notifications.service';
import { UserFactory } from '../../models/factories/user.factory';
import { BlogFactory } from '../../models/factories/blog.factory';
import { BlogData } from '../../services/blog/blog.data.service';

@NgModule({
    providers: [
      AuthService,
      AuthGuard,
      UserData,
      NotificationService,
      UploadService,
      UserFactory,
      BlogFactory,
      BlogData
    ],
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error('Core module is already provided!');
    }
  }
}
