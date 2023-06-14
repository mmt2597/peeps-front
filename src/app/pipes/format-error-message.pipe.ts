import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatErrorMessage'
})
export class FormatErrorMessagePipe implements PipeTransform {

  transform(value: any) {
    let newStr = '';

    if(typeof value == 'object') {
      value.forEach((message: string) => newStr += `<div>${message}</div>`);      
      return newStr;
    } 

    return value;
  }

}
