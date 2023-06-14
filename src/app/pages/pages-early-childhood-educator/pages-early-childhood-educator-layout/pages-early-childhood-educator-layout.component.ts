import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-pages-early-childhood-educator-layout',
  templateUrl: './pages-early-childhood-educator-layout.component.html',
  styleUrls: ['./pages-early-childhood-educator-layout.component.scss']
})
export class PagesEarlyChildhoodEducatorLayoutComponent implements OnInit {

  form: any = {
    first_name: 'Marlon'
  }

  constructor(
    private sidebarService: SidebarService,
  ) { }

  ngOnInit(): void {}

  collapse() {
    this.sidebarService.collapseSubject.next(!this.sidebarService.collapseSubject.getValue());
  }

}
