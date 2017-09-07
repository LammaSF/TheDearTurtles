import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  authState: any = null;

    constructor(
                private afAuth: AngularFireAuth,
                private db: AngularFireDatabase,
                private router: Router
              ) {
                  this.afAuth.authState.subscribe((auth) => {
                    this.authState = auth;
                  });
            }

    // Returns true if user is logged in
    get authenticated(): boolean {
      return this.authState !== null;
    }

    // Returns current user data
    get currentUser(): any {
      return this.authenticated ? this.authState : null;
    }

    // Returns
    get currentUserObservable(): any {
      return this.afAuth.authState;
    }

    // Returns current user UID
    get currentUserId(): string {
      return this.authenticated ? this.authState.uid : '';
    }

    // Anonymous User
    get currentUserAnonymous(): boolean {
      return this.authenticated ? this.authState.isAnonymous : false;
    }

    // Returns current user display name or Guest
    get currentUserDisplayName(): string {
      if (!this.authState) {
        return 'Guest';
      }else if (this.currentUserAnonymous) {
        return 'Anonymous';
      } else {
        return this.authState['displayName'] || 'User without a Name';
      }
    }

    emailSignUp(email: string, password: string) {
      return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then((user) => {
          this.authState = user;
          this.updateUserData();
          this.router.navigateByUrl('/profile');
        })
        .catch(error => console.log(error));
    }

    emailLogin(email: string, password: string) {
       return this.afAuth.auth.signInWithEmailAndPassword(email, password)
         .then((user) => {
           this.authState = user;
           this.updateUserData();
          this.router.navigateByUrl('/profile');
         })
         .catch(error => console.log(error));
    }

    // Sends email allowing user to reset password
    resetPassword(email: string) {
      const fbAuth = firebase.auth();

      return fbAuth.sendPasswordResetEmail(email)
        .then(() => console.log('email sent'))
        .catch((error) => console.log(error));
    }

    signOut(): void {
      this.afAuth.auth.signOut();
      this.router.navigate(['/']);
    }

    private updateUserData(): void {
      const path = `users/${this.currentUserId}`;
      const data = {
                    email: this.authState.email,
                    name: this.authState.displayName
                  };

      this.db.object(path).update(data)
      .catch(error => console.log(error));
  }
}
