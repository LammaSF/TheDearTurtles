import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { CONSTANTS } from './../../../constants/constants';

import { AuthService } from './../../../services/auth/auth.service';
import { UserData } from './../../../services/user/user.data.service';
import { Upload } from './../../../services/uploads/upload/upload';
import { UploadService } from './../../../services/uploads/upload.service';
import { UserInterface } from '../../../models/contracts/user.interface';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  public user: UserInterface;
  private userId;

  public newEmail: string;
  public password: string;
  public upload: Upload;
  public file;
  public selectedFiles: FileList;
  public fileName;

  constructor(
    private userService: UserData,
    private uploadService: UploadService,
    private auth: AuthService) { }

  ngOnInit() {
    this.userId = this.auth.currentUserId || localStorage.authkey;

    this.userService
      .getUserByUid(this.userId)
      .subscribe((res) => {
        this.user = res;
        this.userId = this.auth.currentUserId;
      });
  }

  detectFile(event) {
    this.upload = event.target.files.item(0);
    this.fileName = this.upload.name;
    console.log(this.upload);
    this.file = this.upload;
    this.upload = new Upload(this.file);
  }

  changePicture() {
    const storagePath = `images/users/${this.userId}`;
    const dbPath = `users/${this.userId}/profileImage`;

    if (this.user.profileImage.name) {
      const oldImage = this.user.profileImage.name;
      this.uploadService.deleteFileStorage(storagePath, oldImage);
    }

    this.uploadService.uploadFile(storagePath, dbPath, this.upload);
  }
  resetPassword() {
    this.auth.resetPassword(this.user.email);
  }

  changeEmail() {
    const oldEmail = this.user.email;
    const password = this.password;
    const newEmail = this.newEmail;
    console.log(oldEmail + ' ' + password + ' ' +  newEmail);
    this.auth.changeEmail(oldEmail, newEmail, password);
  }
}
