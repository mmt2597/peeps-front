import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PagesSetupRoleRoutingModule } from './pages-setup-role-routing.module';
import { PagesSetupRoleIndexComponent } from './pages-setup-role-index/pages-setup-role-index.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PagesSetupRoleIndexComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    PagesSetupRoleRoutingModule
  ]
})
export class PagesSetupRoleModule { }
