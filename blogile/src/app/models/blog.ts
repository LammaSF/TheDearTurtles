import { BlogInterface } from './contracts/blog.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class Blog implements BlogInterface {
    userId: string;
    title: string;
    authorName: string;
    description: string;
    createdDate: Date;
    coverImage: any;
    threads: Object[];

    constructor(
        userId,
        title: string,
        authorName: string,
        description: string,
        coverImage: any,
    ) {
        this.userId = userId;
        this.title = title;
        this.authorName = authorName;
        this.description = description;
        this.coverImage = coverImage;
        this.createdDate = new Date();
        this.threads = new Array<any>();
    }
}
