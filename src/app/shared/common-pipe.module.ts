import { NgModule } from '@angular/core';
import { FormatErrorMessagePipe } from '../pipes/format-error-message.pipe';



@NgModule({
  declarations: [
    FormatErrorMessagePipe
  ],
  exports: [
    FormatErrorMessagePipe
  ]
})
export class CommonPipeModule { }
