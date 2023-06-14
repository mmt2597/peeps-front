import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PagesTermsOfUseRoutingModule } from './pages-terms-of-use-routing.module';
import { PagesTermsOfUseIndexComponent } from './pages-terms-of-use-index/pages-terms-of-use-index.component';



@NgModule({
  declarations: [
    PagesTermsOfUseIndexComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesTermsOfUseRoutingModule
  ]
})
export class PagesTermsOfUseModule { }
