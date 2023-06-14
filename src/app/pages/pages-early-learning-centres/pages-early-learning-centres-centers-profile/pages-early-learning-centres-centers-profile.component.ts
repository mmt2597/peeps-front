import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataTableDirective } from 'angular-datatables';
import { FaqService } from 'src/app/services/faq.service';
import { environment } from 'src/environments/environment';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CenterProfileService } from 'src/app/services/center-profile.service';

const apiUrl = environment.apiUrl;

@Component({
  selector: 'app-pages-early-learning-centres-centers-profile',
  templateUrl: './pages-early-learning-centres-centers-profile.component.html',
  styleUrls: ['./pages-early-learning-centres-centers-profile.component.scss']
})
export class PagesEarlyLearningCentresCentersProfileComponent implements OnInit {
  @ViewChild(DataTableDirective, {static: false})
  datatableElement: DataTableDirective | any;

  dtOptions: DataTables.Settings = {};
  centerProfiles: any[] = [];
  faqs: any[] = [];

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private faqService: FaqService,
    private centerProfileService: CenterProfileService
  ) { }

  ngOnInit(): void {
    this.initDT();
    this.getFaqs();
  }
  
  getFaqs() {
    this.faqService
      .get({ category: 'early-learning-centre-profile' }, 'early-learning-centres/')
      .subscribe(res => this.faqs = res.data);
  }

  initDT() {
    const _that = this;

    this.dtOptions = {
      serverSide: true,
      processing: true,      
      dom: '<"top">rt<"bottom"ip><"clear">',
      ajax: (dTParams: any, callback) => {
        _that.centerProfileService
          .get(dTParams, 'early-learning-centres/')
          .subscribe((resp: any) => {
            _that.centerProfiles = resp.data;

            callback({
              data: [],
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered
            });

        });
      },
      columnDefs:  [
        { width: "30%", targets: 0 },
        { width: "20%", targets: 1 },
        { targets: 2 },
      ],
      columns: [
        { data: 'center_name', title: 'Name' },
        { data: 'address', title: 'Address' },
        { data: 'uuid', title: 'Subscription Type' },
        { data: 'last_used_at', title: 'Last Used' },
        { title: 'Actions', defaultContent: '', searchable: false, orderable: false }
      ]
    } 
  }

  onAddCenterProfile() {
    this.router.navigate(['early-learning-centres/centers-profile/add']);
  }

  search(val: string) {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.search(val).ajax.reload();
    });
  }

  delete(uuid: string) {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure to delete?',
      text: 'Deleting an Early Learning Centre cannot be undone. Please confirm before continuing',
      showCancelButton: true,
      confirmButtonText: 'Continue',
      confirmButtonColor: '#4ba2ac'
    }).then((result) => {
      if (result.isConfirmed) {
        this.centerProfileService
          .delete(uuid, 'early-learning-centres/')
          .subscribe({
            next: (res: any) => this.toastr.success("Successfully deleted"),
            error: (error: Error) => this.toastr.error("Server error"),
            complete: () => this.dtReload()
          });
      }
    })
  }

  dtReload() {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.ajax.reload();
    });
  }
}
