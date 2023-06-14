import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-pages-system-admin-layout',
  templateUrl: './pages-system-admin-layout.component.html',
  styleUrls: ['./pages-system-admin-layout.component.scss']
})
export class PagesSystemAdminLayoutComponent implements OnInit {

  constructor(
    private sidebarService: SidebarService,
  ) { }

  ngOnInit(): void {
  }

  collapse() {
    this.sidebarService.collapseSubject.next(!this.sidebarService.collapseSubject.getValue());
  }
}
