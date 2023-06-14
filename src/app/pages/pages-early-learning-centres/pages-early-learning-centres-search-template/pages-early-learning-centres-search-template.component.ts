import { Component, OnInit } from '@angular/core';
import { SearchTemplate } from 'src/app/models/search-template';
import { SearchTemplateService } from 'src/app/services/search-template.service';

@Component({
  selector: 'app-pages-early-learning-centres-search-template',
  templateUrl: './pages-early-learning-centres-search-template.component.html',
  styleUrls: ['./pages-early-learning-centres-search-template.component.scss']
})
export class PagesEarlyLearningCentresSearchTemplateComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  searchTemplates: SearchTemplate[] = [];
  questions: any;

  constructor(
    private searchTemplateService: SearchTemplateService
  ) { }

  ngOnInit(): void {
    const _that = this;

    this.dtOptions = {
      serverSide: true,
      processing: true,
      searching: false,
      ajax: (dataTablesParameters: any, callback) => {
        _that.searchTemplateService
          .get({}, 'early-learning-centres/')
          .subscribe((resp: any) => {
            _that.searchTemplates = resp.data;

            callback({
              data: resp.data,
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered
            });
          });
      },
      columns: [
        { data: 'template_name', title: 'Template Name' },
        { data: 'position', title: 'Position' },
        { data: 'created_at', title: 'Created' },
        { title: 'Action', defaultContent: '', orderable: false }
      ]
    };
  }

}
