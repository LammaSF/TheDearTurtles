import { Injectable } from '@angular/core';
import { ToasterService, ToasterConfig, Toast } from 'angular2-toaster/angular2-toaster';

@Injectable()
export class NotificationsService {
  constructor(private toasterService: ToasterService, public toasterConfig: ToasterConfig) {
  }

  public toasterconfig: ToasterConfig =
  new ToasterConfig({
      showCloseButton: true,
      tapToDismiss: true,
      timeout: 3000,
      limit: 5,
  });

  popToast(type: any, title: string, body: string) {
    this.toasterService.pop(type, title, body);
  }
}