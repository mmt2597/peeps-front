import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'peeps4u-html';

  constructor(
    private token: TokenService,
    private authService: AuthService 
  ) {
    if(this.token.isLoggedIn()) {
      this.authService.userInfo().subscribe({
        next: (res: any) => {},
        error: (error: any) => {
          this.authService.logout()
        },
        complete: () => {}
      })
    }
  }
}
