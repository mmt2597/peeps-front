import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private issuer = {
    login: environment.apiUrl + 'auth/login',
    register: environment.apiUrl + 'auth/register'
  }

  constructor() { }

  handleData(token: string) {
    localStorage.setItem('auth_token', token);
  }

  getToken() {
    return localStorage.getItem('auth_token');
  }

  isValidToken() {
    const token = this.getToken();

    if(token) {
      const payload = this.payload(token);
      if(payload) {
        return Object.values(this.issuer).indexOf(payload.iss) > -1 ? true: false;
      }
    }

    return false;
  }

  payload(token: string) {
    const jwtPayload = token.split('.')[1];
    return JSON.parse(atob(jwtPayload));
  }

  // Original
  // isLoggedIn() {
  //   return this.isValidToken();
  // }

  // Temp test
  isLoggedIn(): boolean {
    let authToken = this.getToken();
    return (authToken !== null) ? true : false;
  }

  removeToken() {
    localStorage.removeItem('auth_token');
  }
}
