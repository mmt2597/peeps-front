import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthStateService } from 'src/app/services/auth-state.service';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment';

const apiBaseUrl = environment.apiBaseUrl;

@Component({
  selector: 'app-pages-login-index',
  templateUrl: './pages-login-index.component.html',
  styleUrls: ['./pages-login-index.component.scss']
})
export class PagesLoginIndexComponent implements OnInit {
  loginForm: FormGroup;
  errors: any = null;

  constructor(
    public router: Router,
    private token: TokenService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    public formBuilder: FormBuilder,
    public authService: AuthService,
    private authState: AuthStateService,
  ) {
    this.loginForm = this.formBuilder.group({
      email: [],
      password: []
    });

    this.socialLoginState();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.login(this.loginForm.value).subscribe({
      next: (res: any) => {},
      error: (error: any) => {
        if(error.message == "Your email address is not verified.") return this.router.navigate(['email/verify']);
        this.errors = error.errors;

        return;
      },
      complete: () => {
        this.authState.setAuthState(true);
        this.loginForm.reset()
        this.authService.redirectProfilePage();
      }
    });
  }

  responseHandler(data: any) {
    this.token.handleData(data.access_token);
  }

  socialLogin(provider: string) {
    location.href = `${apiBaseUrl}auth/redirect?provider=${provider}&from_login_page`;
  }

  socialLoginState() {
    let state = this.route.snapshot.queryParams['state'];
    let code = this.route.snapshot.queryParams['code'];

    // Check has param `state` & `code`
    if(state && code) {
      this.authService
        .login(this.route.snapshot.queryParams)
        .subscribe({
          next: (res: any) => {},
          error: (error: any) => {
            if(error?.message == 'user not registered') {
              this.toastr.error("User is not registered.");
              this.router.navigate(['/register']);
            }
          },
          complete: () => {
            this.authState.setAuthState(true);
            this.authService.redirectProfilePage();
          }
        });
    }
  }
}
