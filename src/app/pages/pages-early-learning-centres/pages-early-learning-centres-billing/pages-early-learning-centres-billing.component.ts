import { Component, OnInit } from '@angular/core';
import { ChargebeeService } from 'src/app/services/chargebee.service';

declare const Chargebee: any;

@Component({
  selector: 'app-pages-early-learning-centres-billing',
  templateUrl: './pages-early-learning-centres-billing.component.html',
  styleUrls: ['./pages-early-learning-centres-billing.component.scss']
})
export class PagesEarlyLearningCentresBillingComponent implements OnInit {

  cbInstance: any;

  constructor(
    private chargebeeService: ChargebeeService
  ) { }

  ngOnInit(): void {
    this.cbInstance = Chargebee.init({
      site: 'peepsdev-test'
    });
  }

  openSection(sectionName: string): void {
    let firstOpen = true;

    this.cbInstance.setPortalSession(() => {
      return  new Promise((resolve, reject) => {
        this.chargebeeService.httpSession('early-learning-centres/').subscribe((response: any) => resolve(response));
      });
    });

  	this.cbInstance.createChargebeePortal().open(
  		{
        visit: (section: string) => {
          if (section === 'home') {
            if (!firstOpen) {
              this.cbInstance.closeAll();
            }
          }
          firstOpen = false;
        }
      },
	  	{
	  		sectionType: Chargebee.getPortalSections()[sectionName]
	  	}
  	);
  }
}
