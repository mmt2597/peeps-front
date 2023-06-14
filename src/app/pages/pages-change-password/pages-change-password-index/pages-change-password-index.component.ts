import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pages-change-password-index',
  templateUrl: './pages-change-password-index.component.html',
  styleUrls: ['./pages-change-password-index.component.scss']
})
export class PagesChangePasswordIndexComponent implements OnInit {

  errors: any = [];

  form = {
    token: null,
    email:null,
    password: null,
    password_confirmation: null
  }

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    let token = this.route.snapshot.queryParams['token'];
    this.form.token = token;
    
    if(!token) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
  }

  onChangePassword() {
    this.authService.changePassword(this.form)
      .subscribe(
        result => {},
        error => {
          this.errors = error.errors;
        },
        () => {
          this.formReset()
          this.toastr.success('Successfully Change Password');
          this.router.navigate(['login']);
        }
      );
  }

  formReset() {
    this.form.password = null;
    this.form.password_confirmation = null;
  }
}
