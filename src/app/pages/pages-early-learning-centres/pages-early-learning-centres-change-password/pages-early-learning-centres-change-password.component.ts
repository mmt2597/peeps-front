import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-pages-early-learning-centres-change-password',
  templateUrl: './pages-early-learning-centres-change-password.component.html',
  styleUrls: ['./pages-early-learning-centres-change-password.component.scss']
})
export class PagesEarlyLearningCentresChangePasswordComponent implements OnInit {
  errors: any = [];
  form: any = {
    old_password: null,
    password: null,
    password_confirmation: null,
  }

  constructor(
    private toastr: ToastrService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {

  }

  update() {
    this.userService.changePassword(this.form)
    .subscribe({
      next: (res: any) => {
        this.toastr.info('Successfully Change Password');
        this.resetForm();
      },
      error: (error: any) => this.errors = error.errors,
      complete: () => {}
    });
  }

  resetForm() {
    this.errors = [];
    this.form.old_password = null;
    this.form.password = null;
    this.form.password_confirmation = null
  }
}
