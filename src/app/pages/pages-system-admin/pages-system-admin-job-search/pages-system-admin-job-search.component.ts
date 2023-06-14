import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;

@Component({
  selector: 'app-pages-system-admin-job-search',
  templateUrl: './pages-system-admin-job-search.component.html',
  styleUrls: ['./pages-system-admin-job-search.component.scss']
})
export class PagesSystemAdminJobSearchComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  tempItems: any[] = [];

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    const _that = this;

    // #Todo: Change the tempItem to realdata
    this.dtOptions = {
      serverSide: true,
      processing: true,
      searching: false,
      paging: false,
      ajax: (dTParams: any, callback) => {
        _that.http
          .get(`${apiUrl}user-info`)
          .subscribe((resp: any) => {
            // _that.tempItems = resp.data;
            _that.tempItems = [];

            callback({
              data: [],
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered
            });

        });
      },
      columns: [
        { data: 'uuid', title: 'Educator Position' },
        { data: 'uuid', title: 'Child Care Center' },
        { data: 'uuid', title: 'Subscription Type' },
        { data: 'uuid', title: 'Created' },
        { data: 'uuid', title: 'Last Used' },
        { data: 'uuid', title: 'List Available' },
        { title: 'Actions', defaultContent: '', orderable: false }
      ]
    } 
  }

  search(val: string) {
    console.log('search: ', val);
  }
}
