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


import { CoreModule } from './modules/core/core.module';
import { ToasterModule } from 'angular2-toaster';

import { SharedModule } from './modules/shared/shared.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { HomeModule } from './modules/home/home.module';
import { CreateBlogComponent } from '../src/app/create-blog/create-blog.component';
import { ViewBlogComponent } from '../src/app/view-blog/view-blog.component';
import { BlogComponent } from '../src/app/blog/blog.component';
import { CreateThreadComponent } from '../src/app/create-thread/create-thread.component';
import { ViewThreadComponent } from '../src/app/view-thread/view-thread.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateBlogComponent,
    ViewBlogComponent,
    BlogComponent,
    CreateThreadComponent,
    ViewThreadComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MaterializeModule,
    CoreModule,
    HomeModule,
    SharedModule,
    ToasterModule,
    UserModule,
    AuthModule,
    RoutesModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
