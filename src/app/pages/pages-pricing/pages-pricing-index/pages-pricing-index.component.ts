import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user.model';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { ChargebeeService } from 'src/app/services/chargebee.service';

declare const Chargebee: any;
@Component({
  selector: 'app-pages-pricing-index',
  templateUrl: './pages-pricing-index.component.html',
  styleUrls: ['./pages-pricing-index.component.scss']
})
export class PagesPricingIndexComponent implements OnInit {
  cbInstance: any;
  user?: User;

  constructor(
    private toastr: ToastrService,
    private userService: UserService,
    private authService: AuthService,
    private chargebeeService: ChargebeeService,
  ) {
    this.authService.currentUser.subscribe(user => {
      this.user = user;
    })
  }

  ngOnInit(): void {
    this.cbInstance = Chargebee.init({
      site: 'peepsdev-test'
    });
  }

  checkout(planId: string): void {
    this.cbInstance.openCheckout({
      hostedPage: () => {
        return this.chargebeeService.httpHostedPage('early-learning-centres/', planId).toPromise();
      },
      success: () => {
        this.cbInstance.closeAll();

        if (planId === 'PEEPS-4-U-SEARCH-AUD-Monthly') {
          this.userService.addBalance({ balance: 11 },  'early-learning-centres/').subscribe({
            next:(res: any) => { 
              this.authService.updateUserLocalStorage(); 
              Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Successfully Added 11 Credit.'
              });  
            },
            error: (error: any) => {
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Something went wrong'
              });
            }
          });
        }

        if (planId === 'PEEPS-4-U-STARTER-AUD-Monthly') {
          this.userService.addBalance({ balance: 1 },  'early-learning-centres/').subscribe({
            next: (res: any ) => { 
              this.authService.updateUserLocalStorage();
              Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Successfully Added 1 Credit.',
                confirmButtonColor: '#4ba2ac',
              });  
            },
            error: (error: any) => {
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Something went wrong',
                confirmButtonColor: '#4ba2ac',
              });
            }
          });
        }
      }
    });
  }

}
