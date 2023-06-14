import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesLoginIndexComponent } from './pages-login-index/pages-login-index.component';
import { PagesLoginRoutingModule } from './pages-login-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PagesLoginIndexComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    PagesLoginRoutingModule
  ]
})
export class PagesLoginModule { }
