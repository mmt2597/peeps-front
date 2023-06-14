import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PagesHowItWorksRoutingModule } from './pages-how-it-works-routing.module';

import { PagesHowItWorksIndexComponent } from './pages-how-it-works-index/pages-how-it-works-index.component';

@NgModule({
  declarations: [
    PagesHowItWorksIndexComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesHowItWorksRoutingModule
  ]
})
export class PagesHowItWorksModule { }
