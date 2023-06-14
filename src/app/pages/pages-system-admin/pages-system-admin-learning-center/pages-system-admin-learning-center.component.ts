import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataTableDirective } from 'angular-datatables';
import { environment } from 'src/environments/environment';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CenterProfileService } from 'src/app/services/center-profile.service';

const apiUrl = environment.apiUrl;

@Component({
  selector: 'app-pages-system-admin-learning-center',
  templateUrl: './pages-system-admin-learning-center.component.html',
  styleUrls: ['./pages-system-admin-learning-center.component.scss']
})
export class PagesSystemAdminLearningCenterComponent implements OnInit {
  @ViewChild(DataTableDirective, {static: false})
  datatableElement: DataTableDirective | any;

  dtOptions: DataTables.Settings = {};
  centerProfiles: any[] = [];

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private centerProfileService: CenterProfileService
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
        
        this.centerProfileService.get(dTParams, 'system-admin/')
          .subscribe({
            next: (res: any) => {
              _that.centerProfiles = res.data;

              callback({
                data: [],
                recordsTotal: res.recordsTotal,
                recordsFiltered: res.recordsFiltered
              });
            },
            error: (error: any) => {},
            complete: () => {}
          })
      },
      columnDefs:  [
        { width: "30%", targets: 0 },
        { width: "20%", targets: 1 },
        { targets: 2 },
      ],
      columns: [
        { data: 'centre_name', title: 'Centre Name' },
        { data: 'suburb', title: 'Location' },
        { data: 'uuid', title: 'Subscription Type' },
        { data: 'uuid', title: 'Last Used' },
        { title: 'Action', defaultContent: '', orderable: false }
      ]
    } 
  }

  addNewCenter() {
    this.router.navigate(['system-admin/learning-centers/add']);
  }

  deleteCentre(uuid: string) {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure to delete?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      confirmButtonColor: '#4ba2ac'
    }).then((result) => {
      if (result.isConfirmed) {
          this.centerProfileService
          .delete(uuid, 'system-admin/')
          .subscribe({
            next: (res: any) => this.toastr.success("Successfully deleted"),
            error: (error: Error) => this.toastr.error("Server error"),
            complete: () => this.dtReload()
          });
      }
    })
  }

  search(val: string) {

  }

  dtReload() {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.ajax.reload();
    });
  }
}
