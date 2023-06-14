import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataTableDirective } from 'angular-datatables';
import { FaqService } from 'src/app/services/faq.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pages-system-admin-help-centre',
  templateUrl: './pages-system-admin-help-centre.component.html',
  styleUrls: ['./pages-system-admin-help-centre.component.scss']
})
export class PagesSystemAdminHelpCentreComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective | any;

  dtOptions: any;
  faqs: any = []

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private faqService: FaqService,
  ) { }

  ngOnInit(): void {
    this.initDT();
  }

  initDT() {
    const _that = this;

    this.dtOptions = {
      serverSide: true,
      processing: true,
      dom: '<"top">rt<"bottom"ip><"clear">',
      ajax: (dataTablesParameters: any, callback: any) => {
        _that.faqService
          .get(dataTablesParameters, 'system-admin/')
          .subscribe((resp: any) => {
            _that.faqs = resp.data;

            callback({
              data: [],
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered
            });
          });
      },
      columnDefs: [
        { width: "20%", targets: 0 },
        { width: "20%", targets: 1 },
        { width: "10%", targets: 3 },
        { targets: 2 },
      ],
      columns: [
        { data: 'role.name', title: 'Role' },
        { data: 'category', title: 'Page Name' },
        { data: 'question', title: 'FAQ' },
        { title: 'Action', defaultContent: '', orderable: false }
      ]
    };
  }

  search(val: string) {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.search(val).ajax.reload();
    });
  }

  onAddFaq() {
    this.router.navigate(['system-admin/help-centre/add']);
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
        this.faqService.delete(uuid, 'system-admin/')
          .subscribe({
            next: (res: any) => this.toastr.success('', 'Successfully deleted'),
            error: (error: any) => this.toastr.error("Server Error"),
            complete: () => {
              this.datatableElement.dtInstance.then((dtInsance: DataTables.Api) => dtInsance.draw());
            }
          });
      }
    });
  }
}
