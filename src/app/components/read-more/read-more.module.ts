import { NgModule } from '@angular/core';
import { ReadMoreComponent } from './read-more.component';
import { StringToHtmlPipe } from 'src/app/pipes/string-to-html.pipe';


@NgModule({
  declarations: [
    StringToHtmlPipe,
    ReadMoreComponent
  ],
  imports: [
    
  ],
  exports: [
    ReadMoreComponent
  ],
  providers: [
    StringToHtmlPipe,
  ]
})
export class ReadMoreModule { }
