import { BlogInterface } from './contracts/blog.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class Blog implements BlogInterface {
    userId: string;
    title: string;
    authorName: string;
    description: string;
    createdOn: number;
    coverImage: any;
    threads: any;

    constructor(
        userId: string,
        title: string,
        authorName: string,
        description: string,
        coverImage: any,
        createdOn: number,
        threads: any,
    ) {
        this.userId = userId;
        this.title = title;
        this.authorName = authorName;
        this.description = description;
        this.coverImage = coverImage;
        this.createdOn = createdOn;
        this.threads = threads;
    }
}
