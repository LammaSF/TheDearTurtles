import { Injectable } from '@angular/core';
import { UserInterface } from '../contracts/user.interface';
import { User } from '../user';


@Injectable()
export class UserFactory {
    createUser(
        firstName: string,
        lastName: string,
        username: string,
        email: string,
        profileImage: any,
      ): UserInterface {
          return new User(username, firstName, lastName, email, profileImage);
      }
}
