import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent implements OnInit {

  eceRoutes = [
    {
      icon: 'bx bxs-graduation pe-2',
      title: 'Educators',
      path: '/system-admin/educators'
    },
    {
      icon: 'bx bx-book pe-2',
      title: 'Learning Centres',
      path: '/system-admin/learning-centers'
    },
    {
      icon: 'bx bx-file-find pe-2',
      title: 'Job Search',
      path: '/system-admin/job-search'
    },
    {
      icon: 'bx bx-news pe-2',
      title: 'What\'s New',
      path: '/system-admin/whats-new'
    },
    {
      icon: 'bx bx-question-mark pe-2',
      title: 'Questions',
      path: '/system-admin/questions'
    },
    {
      icon: 'bx bx-line-chart pe-2',
      title: 'Stats & Reports',
      path: '/system-admin/stats-and-reports'
    },
    {
      icon: 'bx bx-help-circle pe-2',
      title: 'Help Centre',
      path: '/system-admin/help-centre'
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
