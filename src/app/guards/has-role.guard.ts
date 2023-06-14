import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class HasRoleGuard implements CanActivate {

  constructor(
    private router: Router,
    private token: TokenService,
    private authService: AuthService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
  {
    
    // Logged in
    if(this.token.isLoggedIn()) {
      let currentRole = this.authService.currentUserValue.role;

      if(currentRole == null && state.url !== '/setup-role') {
        this.router.navigate(['/setup-role']);
        return false;
      }

      if(currentRole !== null && state.url == '/setup-role') {
        this.router.navigate(['/']);
      }

    }

    // Not Logged in
    if(!this.token.isLoggedIn() && (state.url == '/setup-role')) {
      this.router.navigate(['/']);
    }

    return true;
  }

}
