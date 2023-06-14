import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-pages-early-childhood-educator-change-password',
  templateUrl: './pages-early-childhood-educator-change-password.component.html',
  styleUrls: ['./pages-early-childhood-educator-change-password.component.scss']
})
export class PagesEarlyChildhoodEducatorChangePasswordComponent implements OnInit {
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
