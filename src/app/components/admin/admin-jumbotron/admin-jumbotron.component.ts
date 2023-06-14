import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-jumbotron',
  templateUrl: './admin-jumbotron.component.html',
  styleUrls: ['./admin-jumbotron.component.scss']
})
export class AdminJumbotronComponent implements OnInit {
  user?: User;
  eceRoutes: any = {
    '/system-admin/educators': {
      title: 'Educators',
      shorten_title: 'Educator',
    },
    '/system-admin/learning-centers': {
      title: 'Learning Centres',
      shorten_title: 'Learning Centre',
    },
    '/system-admin/job-search': {
      title: 'Job Search',
      shorten_title: 'Work Exp',
    },
    '/system-admin/whats-new': {
      title: 'What\'s New',
      shorten_title: 'Whats New'
    },
    '/system-admin/questions': {
      title: 'Questions',
      shorten_title: 'Question'
    },
    '/system-admin/stats-and-reports': {
      title: 'Stats & Reports',
      shorten_title: 'Stats & Reports'
    },
    '/system-admin/help-centre': {
      title: 'Help Centre',
      shorten_title: 'Help Centre'
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
