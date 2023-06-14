import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { PagesContactRoutingModule } from './pages-contact-routing.module';
import { PagesContactIndexComponent } from './pages-contact-index/pages-contact-index.component';


@NgModule({
  declarations: [
    PagesContactIndexComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    PagesContactRoutingModule
  ]
})
export class PagesContactModule { }
