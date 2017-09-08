import { UserInterface } from './contracts/user.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class User implements UserInterface {
    public username: string;
    public firstName: string;
    public lastName: string;
    public email: string;
    profileImage: any;

    constructor(
        username: string = '',
        firstName: string = '',
        lastName: string = '',
        email: string = '',
        profileImage: any = ''
    ) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.profileImage = profileImage;
    }
}
