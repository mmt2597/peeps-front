import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-elc-jumbotron',
  templateUrl: './elc-jumbotron.component.html',
  styleUrls: ['./elc-jumbotron.component.scss']
})
export class ElcJumbotronComponent implements OnInit {
  user?: User;
  eceRoutes: any = {
    '/early-learning-centres/profile': {
      title: 'Personal Information',
      shorten_title: 'Personal Info',
    },
    '/early-learning-centres/educator-search': {
      title: 'New Educator Search',
      shorten_title: 'Educator Search',
    },
    '/early-learning-centres/search-history': {
      title: 'Search History',
      shorten_title: 'Search History',
    },
    '/early-learning-centres/centers-profile': {
      title: 'Centre Profile',
      shorten_title: 'Centre Profile',
    },
    '/early-learning-centres/change-password': {
      title: 'Change Password',
      shorten_title: 'Change Password'
    },
    '/early-learning-centres/billing': {
      title: 'Billing Information',
      shorten_title: 'Billing Info'
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
