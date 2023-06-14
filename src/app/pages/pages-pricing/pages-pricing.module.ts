import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesPricingIndexComponent } from './pages-pricing-index/pages-pricing-index.component';
import { PagesPricingRoutingModule } from './pages-pricing-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxSmartModalModule } from 'ngx-smart-modal';



@NgModule({
  declarations: [
    PagesPricingIndexComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesPricingRoutingModule,
    NgxSmartModalModule.forRoot(),
  ]
})
export class PagesPricingModule { }
