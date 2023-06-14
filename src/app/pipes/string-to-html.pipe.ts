import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringToHtml'
})
export class StringToHtmlPipe implements PipeTransform {

  transform(value: any): any {
    var parser = new DOMParser();
    var doc = parser.parseFromString(value, 'text/html');

    return doc.body.innerText;
  }

}
