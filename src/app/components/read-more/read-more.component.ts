import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss']
})
export class ReadMoreComponent implements OnInit, OnChanges {
    @Input() text: any = '';
    @Input() maxLength = 30;
    fullText = true;
    showMore = false;
    showLess = false;
    rmTextShort = '';
    rmTextFull = '';
    inputWords: any[] = [];

    constructor() {
    }

    ngOnInit(): void {      
    }

    readMore(flag: boolean) {
      if (flag) {
        this.showMore = false;
        this.fullText = true;
        this.rmTextFull = this.text;
        this.showLess = true;
      } else {
        this.showLess = false;
        this.showMore = true;
        this.fullText = false;
      }
    }

    ngOnChanges() {
      this.rmTextShort = this.text;
      this.rmTextFull = this.text;
      this.inputWords = this.text.split(' ');

      if (this.inputWords.length > this.maxLength) {
        this.fullText = false;
        this.showMore = true;
        this.rmTextShort = this.inputWords.slice(0, this.maxLength).join(' ') + '...';
      } else {
        if (this.rmTextShort.length > 700) {
          this.fullText = false;
          this.showMore = true;
          this.rmTextShort = this.rmTextShort.substr(0, 700) + '...';
        } else {
          const lineBreaks = this.rmTextShort.split(/\n/g);
          if (lineBreaks.length > 4) {
            this.fullText = false;
            this.showMore = true;
            this.rmTextShort = lineBreaks.slice(0, 4).join('\n') + '...';
          }
        }
      }
    }
}