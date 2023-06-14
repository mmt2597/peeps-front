import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pages-forgot-password-index',
  templateUrl: './pages-forgot-password-index.component.html',
  styleUrls: ['./pages-forgot-password-index.component.scss']
})
export class PagesForgotPasswordIndexComponent implements OnInit {

  email = '';
  errors: any;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  forgotPassword() {
    this.errors = null;

    this.authService
      .sendResetPasswordLink(this.email)
      .subscribe(
        (res:any) => {
          if(res?.data) {
            this.resetForm();
            this.toastr.info('Password reset link sent to your email');
            this.router.navigate(['/login']);
          } else {
            this.toastr.error('Error');
          }
        },
        error => this.errors = error.errors,
        () => {}
      )
  }

  resetForm() {
    this.email = '';
  }
}
