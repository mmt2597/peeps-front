import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { TokenService } from './token.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { AuthStateService } from './auth-state.service';
import { environment } from 'src/environments/environment';

var apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(
    public router: Router,
    private http: HttpClient,
    public token: TokenService,
    private authState: AuthStateService,
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  register(user: User): Observable<any> {
    return this.http.post(apiUrl + 'auth/register', user);
  }

  login(params: any): Observable<any> {
    return this.http.post<any>(apiUrl + 'auth/login', params)
      .pipe(map((res: any) => {
        if(res && res.data.access_token) {
          localStorage.setItem('currentUser', JSON.stringify(res.data.user));
          this.token.handleData(res.data.access_token);
          this.currentUserSubject.next(res.data.user);
        }

        return params;
      }));
  }

  changePassword(params: any) {
    return this.http.post(apiUrl + 'auth/change-password', params);
  }

  sendResetPasswordLink(email: string) {
    return this.http.post(apiUrl + 'auth/reset-password-request', { email: email });
  }

  resendVerification(email: string) {
    return this.http.post(apiUrl + 'auth/email/resend', { email: email });
  }

  userInfo(): Observable<any> {
    return this.http.get(apiUrl + 'user-info');
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.authState.setAuthState(false);
    this.token.removeToken();
    this.currentUserSubject.next(null as any);
  }

  getRoleSlug(): string {
    return this.currentUserValue.role
      .toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, ''); 
  }

  updateUserLocalStorage() {
    localStorage.removeItem('currentUser');

    this.userInfo().subscribe(res => {
      localStorage.setItem('currentUser', JSON.stringify(res.data));
      this.currentUserSubject.next(res.data);
    });
  }

  redirectProfilePage() {
    let currentRole = this.currentUserValue.role;

    if(currentRole == 'Early Learning Centres') {
      this.router.navigate(['/early-learning-centres/profile']);
    }
    else if(currentRole == 'Early Childhood Educator') {
      this.router.navigate(['/early-childhood-educator/profile']);
    } 
    else if(currentRole == 'System Admin') {
      this.router.navigate(['/system-admin']);
    } 
    else {
      this.router.navigate(['/']);
    }
  }
}
