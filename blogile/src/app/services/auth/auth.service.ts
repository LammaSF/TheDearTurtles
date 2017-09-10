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
import { CONSTANTS } from '../../constants/constants';


@Injectable()
export class AuthService {
  authState: any = null;
  public authUpdated: Subject<boolean> = new Subject<boolean>();

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router,
    private userData: UserData,
    private notificationService: NotificationService
  ) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth;
      this.authUpdated.next(this.authState);
    });
  }

  get isAuthenticated(): boolean {
    return this.authState !== null;
  }

  get currentUser(): any {
    return this.isAuthenticated ? this.authState : null;
  }

  get currentUserObservable(): any {
    return this.afAuth.authState;
  }

  get currentUserId(): string {
    return this.isAuthenticated ? this.authState.uid : '';
  }

  get currentUserAnonymous(): boolean {
    return this.isAuthenticated ? this.authState.isAnonymous : false;
  }

  get currentUserDisplayName(): string {
    if (!this.authState) {
      return 'Guest';
    } else if (this.currentUserAnonymous) {
      return 'Anonymous';
    } else {
      return this.authState['displayName'] || 'User without a Name';
    }
  }

  emailSignUp(email: string, password: string, model: UserInterface) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        user.updateProfile({ displayName: `${model.username}` });
        this.authState = user;
      })
      .then(() => {
        this.userData.add(this.currentUserId, model);
        this.notificationService.popToast('success', 'Success!', 'Your account has been created!')
      })
      .catch(error => this.notificationService.popToast('error', 'Something went wrong!', error.message));
  }

  emailLogin(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
        localStorage.setItem(CONSTANTS.LOCALSTORAGE_AUTH_KEY_NAME, user.uid);
        localStorage.setItem(CONSTANTS.LOCALSTORAGE_EMAIL_KEY_NAME, user.email);
        this.router.navigateByUrl('/user/profile');
        this.notificationService.popToast('success', 'Success!', 'You have logged successfully!');
      })
      .catch(error => this.notificationService.popToast('error', 'Something went wrong!', error.message));
  }

  resetPassword(email: string) {
    const fbAuth = firebase.auth();

    return fbAuth.sendPasswordResetEmail(email)
      .then(() => this.notificationService.popToast('info', 'Success!', 'Email with instructions sent.'))
      .catch((error) => this.notificationService.popToast('error', 'Something went wrong!', error.message));
  }

  changeEmail(oldEmail: string, newEmail: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(oldEmail, password)
      .then((user) => {
        user.updateEmail(newEmail);
        this.userData.update(this.currentUserId, { email: newEmail });
        this.notificationService.popToast('info', 'Success!', 'Your email has been updated');
      })
      .catch((error) => this.notificationService.popToast('error', 'Something went wrong!', error.message));

  }
  signOut(): void {
    this.afAuth.auth.signOut()
      .then(() => {
        localStorage.removeItem(CONSTANTS.LOCALSTORAGE_AUTH_KEY_NAME);
        localStorage.removeItem(CONSTANTS.LOCALSTORAGE_EMAIL_KEY_NAME);
        this.notificationService.popToast('info', 'Success!', 'Successfully signed out!');
        this.router.navigate(['/']);
      });
  }
}
