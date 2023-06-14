import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { NewsletterService } from 'src/app/services/newsletter.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  email: any;
  btnBusy: Boolean = false;
  fullYear: Number = new Date().getFullYear(); 

  constructor(
    private router: Router,
    private tokenService: TokenService,
    private newsLetterService: NewsletterService
  ) { }

  ngOnInit(): void {
  }

  redirectTo(page: string) {
    if(!this.tokenService.isLoggedIn()) {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate([page]);
    }
  }

  subscribe() {
    if(this.btnBusy) return;
    this.btnBusy = true;

    this.newsLetterService.subscribe({ email: this.email }).subscribe({
      next: (res: any) => {
        console.log(res);
        if(res) {
          Swal.fire({
            icon: 'success',
            title: "Success",
            text: 'You have been successfully subscribed to our newsletter'
          });
          this.email = null;
        }
        this.btnBusy = false;
      },
      error: (err: any) => this.btnBusy = false,
      complete: () => {}
    });
  }
}
