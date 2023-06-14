import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ece-jumbotron',
  templateUrl: './ece-jumbotron.component.html',
  styleUrls: ['./ece-jumbotron.component.scss']
})
export class EceJumbotronComponent implements OnInit {
  user?: User;
  eceRoutes: any = {
    '/early-childhood-educator/profile': {
      title: 'Personal Information',
      shorten_title: 'Personal Info',
    },
    '/early-childhood-educator/education-experience': {
      title: 'Education Experience',
      shorten_title: 'Education Exp',
    },
    '/early-childhood-educator/work-experience': {
      title: 'Work Experience',
      shorten_title: 'Work Exp',
    },
    '/early-childhood-educator/change-password': {
      title: 'Change Password',
      shorten_title: 'Change Password'
    }
  };

  constructor(
    public router: Router,
    private authService: AuthService,
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
}
