import { Injectable } from '@angular/core';
import { LocalService } from 'src/app/services/local.service';
import { BehaviorSubject } from "rxjs";
import { UserAuth } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private static TOKEN = 'token';
  private static USER = 'user';
  private authSource = new BehaviorSubject<boolean>(false!);
  public changeEvent = this.authSource.asObservable();

  constructor(private localService: LocalService) { }

  public login(user: UserAuth): Promise<boolean> {
    console.log('user', user);

    return new Promise<boolean>((resolve, reject) => {
      let email = 'user@mail.com';
      let password = '1234';

      if(this.getUser()) {
        email = this.getUser().email;
        password = this.getUser().password;
      }

      if (user.email === email && user.password === password) {
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
      this.authSource.next(true);
      return true;
    }
    this.authSource.next(false);
    return false;
  }

  public logout(): void {
    this.localService.removeToken(AuthService.TOKEN);
    this.authSource.next(false);
  }

  public register(user: UserAuth): void {
    const data = JSON.stringify(user);
    this.localService.saveData(AuthService.USER, data);
    this.localService.setToken(AuthService.TOKEN, '1234');
    this.authSource.next(true);
  }

  public getUser(): UserAuth {
    const data = this.localService.getData(AuthService.USER);
    return JSON.parse(data!);
  }


}
