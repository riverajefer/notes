import { Injectable } from '@angular/core';
import { LocalService } from 'src/app/services/local.service';
import { UserAuth } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private static TOKEN = 'token';

  constructor(private localService: LocalService) { }

  public login(user: UserAuth): void {
    console.log('user', user);
    this.localService.setToken(AuthService.TOKEN, '1234');
  }

  public isAuthenticated(): boolean {
    return this.localService.getToken(AuthService.TOKEN) !== null;
  }

  public logout(): void {
    this.localService.removeToken(AuthService.TOKEN);
  }

  public register(user: UserAuth): void {
    console.log('user', user);
    this.localService.setToken(AuthService.TOKEN, '1234');
  }


}
