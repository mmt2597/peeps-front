import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError((err: any) => {

      if(err.status == 0) this.toastr.error("Server Error");

      if(err.error.message == 'Your email address is not verified.') {
        this.toastr.error("Your email address is not verified. Please Confirm your email address that sent to your email");
      }

      if([401, 403].indexOf(err.status) !== -1) {
        // auto logout if 401 Unauthorized or 403 forbidden response returned from api
        this.authService.logout();
        this.router.navigate(['/']);
      }

      return throwError(err.error);

    }))
  }
}
