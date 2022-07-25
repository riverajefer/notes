import { Input, Component, Output, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() error!: string | null;

  @Output() submitEM = new EventEmitter();
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

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
      // this.submitEM.emit(this.form.value);
    }
  }


}
