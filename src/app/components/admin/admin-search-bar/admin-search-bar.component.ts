import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-admin-search-bar',
  templateUrl: './admin-search-bar.component.html',
  styleUrls: ['./admin-search-bar.component.scss']
})
export class AdminSearchBarComponent implements OnInit {
  @Input() title: string = '';
  @Input() highlightText: string = '';
  @Input() buttonText: string = 'Add';
  @Input() showButton: boolean = true;
  @Input() showSearchBar: boolean = true;

  @Output() buttonClick = new EventEmitter;
  @Output() onSearch = new EventEmitter;
  searchSubject: Subject<any> = new Subject<any>();

  search: string = '';

  constructor() {}

  ngOnInit(): void {
    this.searchSubject
    .pipe(debounceTime(500))
    .subscribe((value) => {
      this.onSearch.emit(value);
    });
  }

  onKeyupSearch() {
    this.searchSubject.next(this.search);
  }

  onSearchEnter() {
    this.onSearch.emit(this.search);
  }

  onButtonClick() {
    this.buttonClick.emit();
  }
}
