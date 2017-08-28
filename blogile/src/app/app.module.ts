import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { RoutesModule } from './modules/routes/routes.module';

import { AuthService } from './services/auth/auth.service';
// import { NotificationsService } from './services/notifications/notifications.service';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';

import { NavComponent } from './modules/home/nav/nav.component';
import { SearchBarComponent } from './modules/home/nav/search-bar/search-bar.component';
import { UserBarComponent } from './modules/home/nav/user-bar/user-bar.component';

import { UserModule } from './modules/user/user.module';
import { SignUpModule} from './modules/sign-up/sign-up.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchBarComponent,
    UserBarComponent,
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
    SignUpModule,
  ],
  providers: [
    AuthService,
    // NotificationsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
