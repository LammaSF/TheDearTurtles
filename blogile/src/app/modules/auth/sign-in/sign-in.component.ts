import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { FormControl, Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';

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
            Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]);

        this.passwordFormControl = new FormControl('', [
            Validators.required,
            Validators.pattern(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/),
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
