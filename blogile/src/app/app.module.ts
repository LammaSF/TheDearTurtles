import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { RoutesModule } from './modules/routes/routes.root.module';

import { AuthService } from './services/auth/auth.service';
// import { NotificationsService } from './services/notifications/notifications.service';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';

import { SharedModule } from './modules/shared/shared.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { SideNavModule } from './modules/home/side-nav/side-nav.module';
import { HomeModule } from './modules/home/home.module';
import { StatisticsModule} from "./modules/statistics/statistics.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RoutesModule,
    BrowserAnimationsModule,
    MaterializeModule,
    UserModule,
    AuthModule,
    SideNavModule,
    HomeModule,
    SharedModule,
    StatisticsModule
  ],
  providers: [
    AuthService,
    // NotificationsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
