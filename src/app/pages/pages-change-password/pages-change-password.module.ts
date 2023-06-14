import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonPipeModule } from 'src/app/shared/common-pipe.module';
import { PagesChangePasswordRoutingModule } from './pages-change-password-routing.module';
import { PagesChangePasswordIndexComponent } from './pages-change-password-index/pages-change-password-index.component';



@NgModule({
  declarations: [
    PagesChangePasswordIndexComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    CommonPipeModule,
    PagesChangePasswordRoutingModule
  ],
  exports: []
})
export class PagesChangePasswordModule { }
