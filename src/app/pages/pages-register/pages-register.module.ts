import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonPipeModule } from 'src/app/shared/common-pipe.module';
import { PagesRegisterRoutingModule } from './pages-register-routing.module';
import { PagesRegisterIndexComponent } from './pages-register-index/pages-register-index.component';



@NgModule({
  declarations: [
    PagesRegisterIndexComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    CommonPipeModule,
    ReactiveFormsModule,
    PagesRegisterRoutingModule
  ],
})
export class PagesRegisterModule { }
