import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { NotificationService } from '../notifications/notifications.service';
import { BlogInterface } from '../../models/contracts/blog.interface';

@Injectable()
export class BlogData {
    private firebaseCollection: FirebaseListObservable<any[]>;

    constructor(private db: AngularFireDatabase, private notificationService: NotificationService) {
        this.db = db;
        this.firebaseCollection = this.db.list('/blogs');
    }

    getAllBlogs() {
        return this.db.list('/blogs');
    }

    getBlogById(blogKey: string) {
        return this.db.object(`/blogs/${blogKey}`);
    }

    add(blog: BlogInterface) {
        return Promise.resolve(
            this.firebaseCollection
                .push(blog)
                .then(_ => {
                    return _.key;
                })
                .catch((error) => this.notificationService.popToast('error', 'Something went wrong!', error.message)));
    }

    editBlog(blogKey: string, blog: object) {
        return Promise.resolve(
            this.db
                .object(`/blogs/${blogKey}`)
                .update(blog)
                .then(data => {
                    return data;
                })
                .catch((error) => this.notificationService.popToast('error', 'Something went wrong!', error.message)));
    }

    delete(blogKey: string) {
        this.db.object(`/blogs/${blogKey}`)
            .remove();
    }

    getBlogByTitle(title: string) {
        const items = this.db.list('blogs', {
            preserveSnapshot: true,
        });

        let item: any;

        items.subscribe(snapshots => {
            snapshots.forEach(snapshot => {
                if (snapshot.val().title === title) {
                    item = snapshot.val();
                }
            });
        });

        return item;
    }

  getBlogByAuthor(author: string) {
    const items = this.db.list('blogs', {
      preserveSnapshot: true,
    });

    let item: any;

    items.subscribe(snapshots => {
      snapshots.forEach(snapshot => {
        if (snapshot.val().authorName === author) {
          item = snapshot.val();
        }
      });
    });

    return item;
  }
}
