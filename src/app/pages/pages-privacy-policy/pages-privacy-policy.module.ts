import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PagesPrivacyPolicyRoutingModule } from './pages-privacy-policy-routing.module';
import { PagesPrivacyPolicyIndexComponent } from './pages-privacy-policy-index/pages-privacy-policy-index.component';



@NgModule({
  declarations: [
    PagesPrivacyPolicyIndexComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesPrivacyPolicyRoutingModule
  ]
})
export class PagesPrivacyPolicyModule { }
