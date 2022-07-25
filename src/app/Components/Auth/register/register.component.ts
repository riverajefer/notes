import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { UserAuth } from '../Models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  public isPasswordSame = false;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }


  public registerForm = this.formBuilder.group({
    name: ['',
      Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
        Validators.pattern('[-_ a-zA-Z0-9]*')
      ])],
    email: ['',
      Validators.compose([
        Validators.required,
        Validators.maxLength(25),
      ])],
    password: ['',
      Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
      ])],
    password_confirm: ['',
      Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
      ])],

  },  {
    validators: this.password.bind(this)
  });

  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password') as FormControl;
    const { value: confirmPassword } = formGroup.get('password_confirm') as FormControl;
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

  ngOnInit(): void {
  }


  submit() {
    const user: UserAuth = {
      name: this.registerForm.value.name,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
    }
    this.authService.register(user);
  }
}
