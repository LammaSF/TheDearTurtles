import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { UserInterface } from '../../models/contracts/user.interface';
import * as firebase from 'firebase';

@Injectable()
export class UserData {
    private db: AngularFireDatabase;
    private firebaseCollection: FirebaseListObservable<any[]>;
    public items;
    public user;
    public userProfileImage;

    constructor(db: AngularFireDatabase) {
        this.db = db;
        this.firebaseCollection = this.db.list('/users');
    }

    getAll() {
        this.firebaseCollection
            .subscribe(items => {
                this.items = items;
            });

        return this.items;
    }

    // need to add some notifications, not console outputs
    add(userId: string, user: UserInterface): void {
        const path = `users/${userId}`;

        this.db.object(path)
            .set(user)
            .catch(error => console.log(error));
    }

    set(userId: string, data: object) {
        const path = `users/${userId}`;

        this.db.object(path)
            .set(data)
            .catch(error => console.log(error));
    }

    update(userId: string, data: object): void {
        const path = `users/${userId}`;

        this.db.object(path)
            .update(data)
            .catch(error => console.log(error));
    }

    getUserByUid(userId: string) {
        return this.db.object(`users/${userId}`);
    }

    getUserProfileImageUrl(userId: string) {
        return new Promise((resolve, reject) => {
            this.getUserByUid(userId)
                .subscribe((user) => {
                    const userStorageRef = firebase.storage()
                        .ref()
                        .child(`images/users/` + userId + '/' + user.profileImage.name);

                    resolve(userStorageRef.getDownloadURL()
                        .then(url => {
                            return url;
                        }));
                });
        });
    }
}