import { BlogData } from './../services/blog/blog.data.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class BlogAuthorGuard implements CanActivate {
    constructor(private router: Router, private afAuth: AngularFireAuth, private data: BlogData) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const userId = localStorage.getItem('authKey');
        const id = route.params['id'];
        let result: boolean;
        this.data.getBlogById(id).subscribe((blog) => {
            if (blog.userId === id) {
                result = true;
            } else {
                this.router.navigate(['/home']);
                result = false;
            }
        });
        return result;
    }
}
