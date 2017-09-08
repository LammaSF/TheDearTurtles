import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { UserInterface } from './../../models/contracts/user.interface';

import { UserData } from '../user/user.data.service';
import { NotificationService } from '../notifications/notifications.service';


@Injectable()
export class AuthService {
  authState: any = null;

  constructor(
                private afAuth: AngularFireAuth,
                private db: AngularFireDatabase,
                private router: Router,
                private userData: UserData,
                private notificationService: NotificationService
              ) {
                  this.afAuth.authState.subscribe((auth) => {
                    this.authState = auth;
                  });
            }

    get authenticated(): boolean {
      return this.authState !== null;
    }

    get currentUser(): any {
      return this.authenticated ? this.authState : null;
    }

    get currentUserObservable(): any {
      return this.afAuth.authState;
    }

    get currentUserId(): string {
      return this.authenticated ? this.authState.uid : '';
    }

    get currentUserAnonymous(): boolean {
      return this.authenticated ? this.authState.isAnonymous : false;
    }

    get currentUserDisplayName(): string {
      if (!this.authState) {
        return 'Guest';
      }else if (this.currentUserAnonymous) {
        return 'Anonymous';
      } else {
        return this.authState['displayName'] || 'User without a Name';
      }
    }

    emailSignUp(email: string, password: string, model: UserInterface) {
      return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then((user) => {
          user.updateProfile({ displayName: `${ model.username }` });
          this.authState = user;
        })
        .then(() => {
          this.userData.add(this.currentUserId, model);
          this.router.navigateByUrl('/profile');
        })
        .catch(error => this.notificationService.popToast('error', 'Something went wrong!', error.message));
    }

    emailLogin(email: string, password: string) {
       return this.afAuth.auth.signInWithEmailAndPassword(email, password)
         .then((user) => {
           this.authState = user;
           // this.updateUserData();
          this.notificationService.popToast('success', 'Success!', 'You have logged successfully!');
          this.router.navigateByUrl('/profile');
         })
         .catch(error => this.notificationService.popToast('error', 'Something went wrong!', error.message));
    }

    // // Sends email allowing user to reset password
    // resetPassword(email: string) {
    //   const fbAuth = firebase.auth();

    //   return fbAuth.sendPasswordResetEmail(email)
    //     .then(() => console.log('email sent'))
    //     .catch((error) => console.log(error));
    // }

    signOut(): void {
      this.afAuth.auth.signOut();
      this.notificationService.popToast('info', 'Success!', 'Successfully signed out!');
      this.router.navigate(['/']);
    }

  //   private updateUserData(): void {
  //     const path = `users/${this.currentUserId}`;
  //     const data = {
  //                   email: this.authState.email,
  //                   name: this.authState.displayName
  //                 };

  //     this.db.object(path).update(data)
  //     .catch(error => console.log(error));
  // }
}
