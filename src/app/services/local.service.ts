import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }
  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);

/*     let notes = [];
    notes = JSON.parse(localStorage.getItem(key) || '{}') || [];
    notes.push(value);
    localStorage.setItem(key, JSON.stringify(notes)); */
  }

  public getData(key: string) {
    return localStorage.getItem(key)
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }
}
