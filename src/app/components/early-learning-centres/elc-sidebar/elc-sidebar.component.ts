import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-elc-sidebar',
  templateUrl: './elc-sidebar.component.html',
  styleUrls: ['./elc-sidebar.component.scss']
})
export class ElcSidebarComponent implements OnInit {

  elcRoutes = [
    {
      icon: 'bx bx-user pe-2',
      title: 'Early Learning Centre Profile',
      path: '/early-learning-centres/centers-profile'
    },
    {
      icon: 'bx bx-user-pin pe-2',
      title: 'Personal Information',
      path: '/early-learning-centres/profile'
    },
    {
      icon: 'bx bxs-search pe-2',
      title: 'New Educator Search',
      path: '/early-learning-centres/educator-search'
    },
    {
      icon: 'bx bx-file-find pe-2',
      title: 'Search History',
      path: '/early-learning-centres/search-history'
    },
    {
      icon: 'bx bx-credit-card pe-2',
      title: 'Billing Information',
      path: '/early-learning-centres/billing'
    },
  ];
  isCollapse: Boolean = false;

  constructor(
    private router: Router,
    private sidebarService: SidebarService,
  ) { }

  ngOnInit(): void {
    this.sidebarService.isCollapse.subscribe(res => {
      this.isCollapse = res;
      if (res) {
        document.body.classList.remove('sidebarCollapse');
      } else {
        document.body.classList.add('sidebarCollapse');
      }
    });
  }

  hasRoute(route: string) {
    return this.router.url.match(new RegExp('\\w*' + route + '($|\\/|\\?)'));
  }

}
