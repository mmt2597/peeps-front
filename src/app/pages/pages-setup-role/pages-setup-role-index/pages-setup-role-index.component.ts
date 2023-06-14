import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/models/role.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-pages-setup-role-index',
  templateUrl: './pages-setup-role-index.component.html',
  styleUrls: ['./pages-setup-role-index.component.scss']
})
export class PagesSetupRoleIndexComponent implements OnInit {

  role = "";
  errors: any = null;

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  onSaveRole() {
    this.userService.saveRole(this.role)
      .subscribe(
        res => {
          this.authService.updateUserLocalStorage();
          this.authService.currentUser.subscribe((res: any) => {
            this.authService.redirectProfilePage();
          });
        },
        error => this.errors = error.errors,
        () => {}
      );
  }
}
