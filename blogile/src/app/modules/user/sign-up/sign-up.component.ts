// import { Component, OnInit } from '@angular/core';
// import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

// import { AuthService } from '../../services/auth/auth.service';

// @Component({
//   selector: 'app-sign-up',
//   templateUrl: './sign-up.component.html',
//   styleUrls: ['./sign-up.component.scss']
// })
// export class SignUpComponent implements OnInit {
//   userForm: FormGroup;
//   newUser = true; // to toggle login or signup form
//   passReset = false; // set to true when password reset is triggered
//   email: string;
//   password: string;

//   formErrors = {
//     'email': '',
//     'password': ''
//   };

//   validationMessages = {
//     'email': {
//       'required': 'Email is required.',
//       'email': 'Email must be a valid email'
//     },
//     'password': {
//       'required': 'Password is required.',
//       'pattern': 'Password must be include at one letter and one number.',
//       'minlength': 'Password must be at least 4 characters long.',
//       'maxlength': 'Password cannot be more than 40 characters long.',
//     }
//   };
//   constructor(private fb: FormBuilder, private auth: AuthService) { }

//   ngOnInit(): void {
//     this.buildForm();
//   }

//   toggleForm() {
//     this.newUser = !this.newUser;
//   }

//   signup(): void {
//     this.auth.emailSignUp(this.userForm.value['email'], this.userForm.value['password']);
//   }

//   login(): void {
//     this.auth.emailLogin(this.userForm.value['email'], this.userForm.value['password']);
//   }

//   resetPassword() {
//     this.auth.resetPassword(this.userForm.value['email'])
//       .then(() => this.passReset = true);
//   }

//   buildForm(): void {
//     this.userForm = this.fb.group({
//       'email': ['', [
//         Validators.required,
//         Validators.email
//       ]
//       ],
//       'password': ['', [
//         Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
//         Validators.minLength(6),
//         Validators.maxLength(25)
//       ]
//       ],
//     });

//     this.userForm.valueChanges.subscribe(data => this.onValueChanged(data));
//     this.onValueChanged(); // reset validation messages
//   }

//   // Updates validation state on form changes.
//   onValueChanged(data?: any) {
//     if (!this.userForm) { return; }
//     const form = this.userForm;
//     for (const field in this.formErrors) {
//       // clear previous error message (if any)
//       this.formErrors[field] = '';
//       const control = form.get(field);
//       if (control && control.dirty && !control.valid) {
//         const messages = this.validationMessages[field];
//         // tslint:disable-next-line:forin
//         for (const key in control.errors) {
//           this.formErrors[field] += messages[key] + ' ';
//         }
//       }
//     }
//   }
// }
