import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PagesThankYouRoutingModule } from './pages-thank-you-routing.module';
import { PagesThankYouIndexComponent } from './pages-thank-you-index/pages-thank-you-index.component';


@NgModule({
  declarations: [
    PagesThankYouIndexComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesThankYouRoutingModule
  ]
})
export class PagesThankYouModule { }
