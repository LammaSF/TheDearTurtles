import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

import { CONSTANTS } from '../../../constants/constants';

import { AuthService } from '../../../services/auth/auth.service';
import { Upload } from '../../../services/uploads/upload/upload';
import { UploadService } from '../../../services/uploads/upload.service';
import { UserInterface } from '../../../models/contracts/user.interface';
import { UserFactory } from '../../../models/factories/user.factory';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public firstName: string;
  public lastName: string;
  public username: string;
  public password: string;
  public email: string;

  private user: UserInterface;
  private userId;

  public userForm: FormGroup;
  public firstNameFormControl: FormControl;
  public lastNameFormControl: FormControl;
  public usernameFormControl: FormControl;
  public emailFormControl: FormControl;
  public passwordFormControl: FormControl;

  public upload: Upload;
  public selectedFiles: FileList;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private uploadService: UploadService,
    private router: Router,
    private userFactory: UserFactory,
  ) { }

  createForm() {
    this.usernameFormControl = new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(10)]);

    this.firstNameFormControl = new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(10)]);

    this.lastNameFormControl = new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(10)]);

    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.pattern(CONSTANTS.EMAIL_VALIDATION_REGEX),
      Validators.minLength(6),
      Validators.maxLength(25)]);

    this.passwordFormControl = new FormControl('', [
      Validators.required,
      Validators.pattern(CONSTANTS.PASSWORD_VALIDATION_REGEX),
      Validators.minLength(6),
      Validators.maxLength(10)]);

    this.userForm = this.formBuilder.group({
      usernameFormControl: this.usernameFormControl,
      firstNameFormControl: this.firstNameFormControl,
      lastNameFormControl: this.lastNameFormControl,
      passwordFormControl: this.passwordFormControl,
      emailFormControl: this.emailFormControl,
    });
  }

  ngOnInit(): void {
    this.createForm();
  }

  signup(): void {
    const user = this.userFactory
      .createUser(this.firstName, this.lastName, this.username, this.email, '');

    this.auth.emailSignUp(this.email, this.password, user)
      .then(() => {
        this.uploadFile()
          .then(() => this.router.navigateByUrl('/user/profile'));
      });
  }

  login(): void {
    this.auth.emailLogin(this.userForm.value['email'], this.userForm.value['password']);
  }

  detectFile(event) {
    this.selectedFiles = event.target.files;
  }

  uploadFile() {
    const userId = this.auth.currentUserId;
    if (!this.selectedFiles) {
      return new Promise((resolve, reject) => resolve());
    }
    const file = this.selectedFiles.item(0);
    if (!file) {
      return new Promise((resolve, reject) => resolve());
    }
    const dbPath = `users/${userId}/profileImage`;
    const storagePath = `images/users/${userId}`;

    this.upload = new Upload(file);
    return this.uploadService.uploadFile(storagePath, dbPath, this.upload);
  }
}

