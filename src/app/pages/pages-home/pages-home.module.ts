import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesHomeRoutingModule } from './pages-home-routing.module';
import { PagesHomeIndexComponent } from './pages-home-index/pages-home-index.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    PagesHomeIndexComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesHomeRoutingModule
  ]
})
export class PagesHomeModule { }
