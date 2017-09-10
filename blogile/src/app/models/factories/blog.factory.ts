import { Injectable } from '@angular/core';
import { BlogInterface } from '../contracts/blog.interface';
import { Blog } from '../blog';


@Injectable()
export class BlogFactory {
    createBlog(
        userId: string,
        title: string,
        authorName: string,
        description: string,
        coverImage: any,
    ): BlogInterface {
        return new Blog(userId, title, authorName, description, coverImage);
    }
}
