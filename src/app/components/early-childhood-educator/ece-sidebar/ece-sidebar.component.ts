import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-ece-sidebar',
  templateUrl: './ece-sidebar.component.html',
  styleUrls: ['./ece-sidebar.component.scss']
})
export class EceSidebarComponent implements OnInit {

  eceRoutes = [
    // {
    //   icon: 'bx bx-home pe-2',
    //   title: 'Dashboard',
    //   path: '/early-childhood-educator/dashboard'
    // },
    {
      icon: 'bx bx-user-pin pe-2',
      title: 'Personal Information',
      path: '/early-childhood-educator/profile'
    },
    {
      icon: 'bx bxs-graduation pe-2',
      title: 'Education Experience',
      path: '/early-childhood-educator/education-experience'
    },
    {
      icon: 'bx bx-briefcase pe-2',
      title: 'Work Experience',
      path: '/early-childhood-educator/work-experience'
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
