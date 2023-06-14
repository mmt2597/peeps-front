import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'htmlToPlainText'
})
export class HtmlToPlainTextPipe implements PipeTransform {

  transform(value: any) {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = value;

    var str = tmp.textContent || tmp.innerText || "";
    return str.toString().replace(/<[^>]*>/g, '');
  }

}
