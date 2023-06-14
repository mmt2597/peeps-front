import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesForgotPasswordRoutingModule } from './pages-forgot-password-routing.module';
import { PagesForgotPasswordIndexComponent } from './pages-forgot-password-index/pages-forgot-password-index.component';



@NgModule({
  declarations: [
    PagesForgotPasswordIndexComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    PagesForgotPasswordRoutingModule
  ]
})
export class PagesForgotPasswordModule { }
