import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-center',
  templateUrl: './help-center.component.html',
  styleUrls: ['./help-center.component.scss']
})
export class HelpCenterComponent implements OnInit {
  @Input() faqs: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
