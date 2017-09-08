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
  public firstNameFormControl: AbstractControl;
  public lastNameFormControl: AbstractControl;
  public usernameFormControl: AbstractControl;
  public emailFormControl: AbstractControl;
  public passwordFormControl: AbstractControl;

  public upload: Upload;
  public selectedFiles: FileList;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private uploadService: UploadService,
    private router: Router,
    private userFactory: UserFactory
  ) { }

  createForm() {
    this.usernameFormControl = new FormControl('', [
      Validators.required,
      Validators.pattern(CONSTANTS.USERNAME_VALIDATION_REGEX),
      Validators.minLength(4),
      Validators.maxLength(10)]);

    this.firstNameFormControl = new FormControl('', [
      Validators.required,
      Validators.pattern(CONSTANTS.FIRSTNAME_VALIDATION_REGEX),
      Validators.minLength(2),
      Validators.maxLength(10)]);

    this.lastNameFormControl = new FormControl('', [
      Validators.required,
      Validators.pattern(CONSTANTS.LASTNAME_VALIDATION_REGEX),
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
      .createUser(this.username, this.firstName, this.lastName, this.email, '');

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
    const file = this.selectedFiles.item(0);
    const dbPath = `users/${userId}/profileImage`;
    const storagePath = `images/users/${userId}`;

    this.upload = new Upload(file);
    return this.uploadService.uploadFile(storagePath, dbPath, this.upload);
  }



  // this.userForm.valueChanges.subscribe(data => this.onValueChanged(data));
  // this.onValueChanged();

  // Updates validation state on form changes.
  // onValueChanged(data?: any) {
  //   if (!this.userForm) { return; }
  //   const form = this.userForm;
  //   for (const field in this.formErrors) {
  //     // clear previous error message (if any)
  //     this.formErrors[field] = '';
  //     const control = form.get(field);
  //     if (control && control.dirty && !control.valid) {
  //       const messages = this.validationMessages[field];
  //       // tslint:disable-next-line:forin
  //       for (const key in control.errors) {
  //         this.formErrors[field] += messages[key] + ' ';
  //       }
  //     }
  //   }
  // }
}

