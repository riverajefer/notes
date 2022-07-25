import { Injectable } from '@angular/core';
import { LocalService } from 'src/app/services/local.service';
import { BehaviorSubject } from "rxjs";
import { UserAuth } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private static TOKEN = 'token';
  private authSource = new BehaviorSubject<boolean>(false!);
  public changeEvent = this.authSource.asObservable();

  constructor(private localService: LocalService) { }

  public login(user: UserAuth): Promise<boolean> {
    console.log('user', user);

    return new Promise<boolean>((resolve, reject) => {
      if (user.email === 'user@mail.com' && user.password === '1234') {
        this.localService.setToken(AuthService.TOKEN, '1234');
        this.authSource.next(true);
        resolve(true);
      }
      reject(false);

    });
  }

  public isAuthenticated(): boolean {
    const token = this.localService.getToken(AuthService.TOKEN);
    if(token)  {
      return true;
    }
    return false;
  }

  public logout(): void {
    this.localService.removeToken(AuthService.TOKEN);
    this.authSource.next(false);
  }

  public register(user: UserAuth): void {
    console.log('user', user);
    this.localService.setToken(AuthService.TOKEN, '1234');
  }


}
