import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pages-email-verify-index',
  templateUrl: './pages-email-verify-index.component.html',
  styleUrls: ['./pages-email-verify-index.component.scss']
})
export class PagesEmailVerifyIndexComponent implements OnInit {

  errors: any;
  form: any = {
    email: null,
  }

  buttonStatus: any = null;

  constructor(
    private toastr: ToastrService, 
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  send() {
    if(this.buttonStatus == 'busy') return;
    this.buttonStatus = 'busy';

    this.authService.resendVerification(this.form.email).subscribe({
      next: (res: any) => this.toastr.info("Verification successfully sent to your email."),
      error: (error: any) => this.errors = error.errors,
      complete: () => {
        this.buttonStatus = null;
        this.form.email = null;
      }
    });
  }
}
