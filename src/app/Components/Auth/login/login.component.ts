import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { UserAuth } from '../Models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  public loginError = false;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService) { }


  public loginForm = this.formBuilder.group({
    email: ['',
      Validators.compose([
        Validators.required,
      ])],
    password: ['',
      Validators.compose([
        Validators.required,
      ])],
  });


  submit() {
    if (this.loginForm.valid) {
      const userAuth: UserAuth = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      }

      this.authService.login(userAuth).then(() => {
        console.log('login ok');
        this.loginError = false;
      }).catch(() => {
        this.loginError = true;
        console.log('login error');
      });
    }
  }


}
