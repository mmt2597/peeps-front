import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/services/auth.service';
import { AuthStateService } from 'src/app/services/auth-state.service';

const apiBaseUrl = environment.apiBaseUrl;

@Component({
  selector: 'app-pages-register-index',
  templateUrl: './pages-register-index.component.html',
  styleUrls: ['./pages-register-index.component.scss']
})
export class PagesRegisterIndexComponent implements OnInit {
  registerForm: FormGroup;
  errors: any = null;
  
  constructor(
    public router: Router,
    private toastr: ToastrService,
    public formBuilder: FormBuilder,
    public authService: AuthService,
    public authState: AuthStateService
  ) {
    this.registerForm = this.formBuilder.group({
      email: [''],
      email_confirmation: [''],
      password: [''],
      password_confirmation: [''],
      role: ['']
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.registerForm.value.role !== '') {
      this.authService.register(this.registerForm.value).subscribe({
        next: (v: any) => {
          this.toastr.success("Successfully Registered");
          // this.login();
          this.registerForm.reset()
          this.router.navigate(['/thank-you']);
        },
        error: (error: any) => this.errors = error.errors,
        complete: () => console.log(),
      });
    }
    else {
      Swal.fire({
        icon: 'warning',
        title: 'Please Select Account Type',
        confirmButtonColor: '#4ba2ac'
      });
    }
  }

  socialLogin(provider: string) {
    let role = this.registerForm.value.role;

    if(role !== '') {
      let encodedURI = (`${apiBaseUrl}auth/redirect?provider=${provider}&role=${role}`).toString();
      location.href = encodedURI;
    }
    else {
      Swal.fire({
        icon: 'warning',
        title: 'Please Select Account Type',
        confirmButtonColor: '#4ba2ac'
      });
    }
  }

  private login() {
    this.authService.login(this.registerForm.value).subscribe({
      next: (res: any) => {},
      error: (error: any) => this.errors = error.errors,
      complete: () => {
        this.authState.setAuthState(true);
        this.registerForm.reset()
        this.authService.redirectProfilePage();
      }
    });
  }
}
