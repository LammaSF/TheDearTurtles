import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder, AbstractControl } from '@angular/forms';

import { AuthService } from '../../../services/auth/auth.service';
import { CONSTANTS } from '../../../constants/constants';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit{
    public email;
    public password;
    public userForm: FormGroup;
    public emailFormControl: AbstractControl;
    public passwordFormControl: AbstractControl;

    constructor(private formBuilder: FormBuilder, private auth: AuthService) { }

    ngOnInit(): void {
        this.createForm();
    }

    createForm() {
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
            emailFormControl: this.emailFormControl,
            passwordFormControl: this.passwordFormControl,
        });
    }

    signIn(): void {
        this.auth.emailLogin(this.email, this.password);
    }

}
