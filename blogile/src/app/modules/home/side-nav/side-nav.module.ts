import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideNavComponent} from './side-nav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SideNavComponent,
  ],
  declarations: [
    SideNavComponent,
  ]
})
export class SideNavModule { }
