import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataTableDirective } from 'angular-datatables';
import { FaqService } from 'src/app/services/faq.service';
import { environment } from 'src/environments/environment';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchHistoryService } from 'src/app/services/search-history.service';
import { CenterProfileService } from 'src/app/services/center-profile.service';

const apiUrl = environment.apiUrl;

@Component({
  selector: 'app-pages-early-learning-centres-search-history',
  templateUrl: './pages-early-learning-centres-search-history.component.html',
  styleUrls: ['./pages-early-learning-centres-search-history.component.scss']
})
export class PagesEarlyLearningCentresSearchHistoryComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective | any;

  dtOptions: DataTables.Settings = {};
  searchHistories: any[] = [];
  faqs: any[] = [];

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private faqService: FaqService,
    private centerProfileService: CenterProfileService,
    private searchHistoryService: SearchHistoryService
  ) { }

  ngOnInit(): void {
    this.initDT();
    this.getFaqs();
  }

  initDT() {
    const _that = this;

    this.dtOptions = {
      serverSide: true,
      processing: true,
      paging: false,
      dom: '<"top">rt<"bottom"ip><"clear">',
      ajax: (dTParams: any, callback) => {
        _that.searchHistoryService
        .get(dTParams, 'early-learning-centres/')
        .subscribe((resp: any) => {
          _that.searchHistories = resp.data;

          callback({
            data: [],
            recordsTotal: resp.recordsTotal,
            recordsFiltered: resp.recordsFiltered
          });

        });
      },
      columns: [
        { data: 'centers_profile.center_name', title: 'Centre Name' },
        { data: 'search_name', title: 'Search Name' },
        { data: 'uuid', title: 'Position' },
        { data: 'created_at', title: 'Created' },
        { data: 'last_used_at', title: 'Last Used' },
        { data: 'uuid', title: 'List Available' },
        { title: 'Actions', defaultContent: '', searchable: false, orderable: false }
      ]
    } 
  }

  getFaqs() {
    this.faqService
      .get({ category: 'search-history' }, 'early-learning-centres/')
      .subscribe(res => this.faqs = res.data);
  }

  search(val: string) {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.search(val).ajax.reload();
    });
  }

  editOrSearchAgain(index: Number, searchHistoryUuid: string) {
    this.router.navigate(
      ['/early-learning-centres/educator-search'],
      { queryParams: { search_history_uuid: searchHistoryUuid } }
    );
  }

  delete(uuid: string) {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure to delete?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      confirmButtonColor: '#4ba2ac'
    }).then((result) => {
      if (result.isConfirmed) {
        this.searchHistoryService
          .delete(uuid, null, 'early-learning-centres/')
          .subscribe({
            next: (res: any) => {
              res?.data ? this.toastr.success('Successfully Deleted') : this.toastr.error("Error Deletion");
            },
            error: (error: Error) => this.toastr.error("Server Error"),
            complete: () => this.dtReload()
          });
      }
    });
  }

  downloadList(searchHistoryUuid: string) {
    this.centerProfileService.downloadLists(searchHistoryUuid, 'early-learning-centres/').subscribe((x: any) => {
      // It is necessary to create a new blob object with mime-type explicitly set
      // otherwise only Chrome works like it should
      var newBlob = new Blob([x], { type: "application/pdf" });
      
      // IE doesn't allow using a blob object directly as link href
      // instead it is necessary to use msSaveOrOpenBlob
      if (window.navigator && (window.navigator as any).msSaveOrOpenBlob) {
          (window.navigator as any).msSaveOrOpenBlob(newBlob, 'candidates.pdf');
          return;
      }
      
      // For other browsers: 
      // Create a link pointing to the ObjectURL containing the blob.
      const data = window.URL.createObjectURL(newBlob);
      
      var link = document.createElement('a');
      link.href = data;
      link.download = 'candidates.pdf';
      // this is necessary as link.click() does not work on the latest firefox
      link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
      
      setTimeout(function () {
          // For Firefox it is necessary to delay revoking the ObjectURL
          window.URL.revokeObjectURL(data);
          link.remove();
      }, 100);
    });
  }

  dtReload() {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.ajax.reload();
    });
  }
}
