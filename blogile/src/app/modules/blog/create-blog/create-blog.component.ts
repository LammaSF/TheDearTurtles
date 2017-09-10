import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../services/auth/auth.service';
import { UploadService } from '../../../services/uploads/upload.service';
import { Upload } from '../../../services/uploads/upload/upload';
import { BlogFactory } from '../../../models/factories/blog.factory';
import { BlogInterface } from '../../../models/contracts/blog.interface';
import { NotificationService } from '../../../services/notifications/notifications.service';
import { BlogData } from '../../../services/blog/blog.data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {
  public blogTitle: string;
  public blogDescription: string;
  public blogCoverImage: any;

  public upload: Upload;
  public blogKey: string;
  public blog: BlogInterface;
  public selectedFiles: FileList;
  public filename: string;

  constructor(private auth: AuthService,
    private uploadService: UploadService,
    private blogFactory: BlogFactory,
    private notificationService: NotificationService,
    private blogData: BlogData,
    private router: Router) { }

  ngOnInit() {
  }

  detectFile(event) {
    this.selectedFiles = event.target.files;
  }

  uploadFile() {
    if (!this.selectedFiles) {
      this.notificationService.popToast('error', 'Error', 'Please import a picture');
      return;
    }

    const userId = this.auth.currentUserId;
    const file = this.selectedFiles.item(0);
    if (!file) {
      return new Promise((resolve, reject) => { resolve(); });
    } else {
      this.filename = file.name;
      const dbPath = `blogs/${this.blogKey}/image`;
      const storagePath = `images/blogs/${this.blogKey}`;
      this.upload = new Upload(file);
      return this.uploadService.uploadFile(storagePath, dbPath, this.upload);
    }
  }

  createBlog() {
    const userId = this.auth.currentUserId;
    const author = this.auth.currentUserDisplayName;

    this.blog = this.blogFactory
      .createBlog(
      userId,
      this.blogTitle,
      author,
      this.blogDescription,
      null,
      Date.now(),
      []
      );

    this.blogData
      .add(this.blog)
      .then(blogKey => {
        if (this.upload !== null) {
          this.blogKey = blogKey;
        }
      })
      .then(() => this.uploadFile()
        .then(() => this.router.navigateByUrl('/blog/all-blogs')));

    this.notificationService.popToast('success', 'Success!', 'Your blog is added! Redirecting...');
}
}
