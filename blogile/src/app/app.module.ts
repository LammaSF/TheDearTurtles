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

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';

import { NavComponent } from './modules/home/nav/nav.component';
import { SearchBarComponent } from './modules/home/nav/search-bar/search-bar.component';
import { UserBarComponent } from './modules/home/nav/user-bar/user-bar.component';

import { UserComponent } from './modules/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchBarComponent,
    UserComponent,
    UserBarComponent
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
    MaterializeModule
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
