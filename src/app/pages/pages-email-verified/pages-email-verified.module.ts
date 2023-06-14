import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PagesEmailVerifiedRoutingModule } from './pages-email-verified-routing.module';
import { PagesEmailVerifiedIndexComponent } from './pages-email-verified-index/pages-email-verified-index.component';


@NgModule({
  declarations: [
    PagesEmailVerifiedIndexComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesEmailVerifiedRoutingModule
  ]
})
export class PagesEmailVerifiedModule { }
