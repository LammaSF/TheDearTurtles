import { NgModule, Optional, SkipSelf } from '@angular/core';

import { UserData } from '../../services/user/user.data.service';

import { AuthService } from '../../services/auth/auth.service';
import { AuthGuard } from '../../guards/auth.guard';

import { UploadService } from '../../services/uploads/upload.service';
import { NotificationService } from '../../services/notifications/notifications.service';
import { UserFactory } from '../../models/factories/user.factory';

@NgModule({
    providers: [
      AuthService,
      AuthGuard,
      UserData,
      NotificationService,
      UploadService,
      UserFactory
    ],
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error('Core module is already provided!');
    }
  }
}
