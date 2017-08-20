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

import { FlexLayoutModule } from '@angular/flex-layout';

import { MdToolbarModule } from '@angular/material';
import { MdInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchBarComponent,
    SignUpComponent,
    SignInComponent
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
    FlexLayoutModule,
    MdToolbarModule,
    MdInputModule,
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
