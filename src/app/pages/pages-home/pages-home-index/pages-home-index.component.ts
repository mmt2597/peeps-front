import { Component, OnInit } from '@angular/core';
import { CenterProfileService } from 'src/app/services/center-profile.service';

@Component({
  selector: 'app-pages-home-index',
  templateUrl: './pages-home-index.component.html',
  styleUrls: ['./pages-home-index.component.scss']
})
export class PagesHomeIndexComponent implements OnInit {

  liveUpdates: any = [];

  constructor(
    private centerProfileService: CenterProfileService
  ) {
    this.centerProfileService.getLiveUpdates().subscribe((res: any) => this.liveUpdates = res);
  }

  ngOnInit(): void {
  }

}
