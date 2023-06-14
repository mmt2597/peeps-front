import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
// import { SafeHtmlPipe } from 'src/app/pipes/safe-html.pipe';
// import { StringToHtmlPipe } from 'src/app/pipes/string-to-html.pipe';
import { PagesWhatsNewRoutingModule } from './pages-whats-new-routing.module';
import { ReadMoreModule } from 'src/app/components/read-more/read-more.module';
import { PagesWhatsNewIndexComponent } from './pages-whats-new-index/pages-whats-new-index.component';
import { PagesWhatsNewReadMoreComponent } from './pages-whats-new-read-more/pages-whats-new-read-more.component';


@NgModule({
  declarations: [
    // SafeHtmlPipe,
    // StringToHtmlPipe,
    PagesWhatsNewIndexComponent,
    PagesWhatsNewReadMoreComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReadMoreModule,
    PagesWhatsNewRoutingModule
  ],
  providers: [
    // SafeHtmlPipe,
    // StringToHtmlPipe
  ]
})
export class PagesWhatsNewModule { }
