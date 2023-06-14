import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesAboutRoutingModule } from './pages-about-routing.module';
import { PagesAboutIndexComponent } from './pages-about-index/pages-about-index.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    PagesAboutIndexComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesAboutRoutingModule
  ]
})
export class PagesAboutModule { }
