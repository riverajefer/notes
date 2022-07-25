import { Component } from '@angular/core';
import { AuthService } from './Components/Auth/services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'notes';
  public isAuthenticated = false;

  constructor(private authService: AuthService) {
    this.isAuthenticated = this.authService.isAuthenticated();

    this.authService.changeEvent.subscribe((auth) => {
      console.log('auth', auth)
      this.isAuthenticated = auth;
    });

  }


}
