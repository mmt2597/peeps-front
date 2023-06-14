import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-ece-menu',
  templateUrl: './ece-menu.component.html',
  styleUrls: ['./ece-menu.component.scss']
})
export class EceMenuComponent implements OnInit {
  user?: User;

  constructor(
    private router: Router,
    private authService: AuthService,
    private sidebarService: SidebarService,
  ) { 
    this.authService.currentUser.subscribe(user => {
      this.user = user;
    })
  }

  ngOnInit(): void {
  }

  hasRoute(route: string) {
    return this.router.url.match(new RegExp('\\w*' + route + '($|\\/|\\?)'));
  }

  onLogout() {
    this.authService.logout();
    location.reload();
  }

  collapse() {
    this.sidebarService.collapseSubject.next(!this.sidebarService.collapseSubject.getValue());
  }  
}
