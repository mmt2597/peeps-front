import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-pages-early-learning-centres-layout',
  templateUrl: './pages-early-learning-centres-layout.component.html',
  styleUrls: ['./pages-early-learning-centres-layout.component.scss']
})
export class PagesEarlyLearningCentresLayoutComponent implements OnInit {

  constructor(
    private sidebarService: SidebarService,
  ) { }

  ngOnInit(): void {
  }

  collapse() {
    this.sidebarService.collapseSubject.next(!this.sidebarService.collapseSubject.getValue());
  }

}
