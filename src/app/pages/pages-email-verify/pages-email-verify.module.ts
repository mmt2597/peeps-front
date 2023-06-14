import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PagesEmailVerifyRoutingModule } from './pages-email-verify-routing.module';
import { PagesEmailVerifyIndexComponent } from './pages-email-verify-index/pages-email-verify-index.component';


@NgModule({
  declarations: [
    PagesEmailVerifyIndexComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    PagesEmailVerifyRoutingModule
  ]
})
export class PagesEmailVerifyModule { }
