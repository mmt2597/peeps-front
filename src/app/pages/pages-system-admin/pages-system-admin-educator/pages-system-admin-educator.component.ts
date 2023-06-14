import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user.model';
import { DataTableDirective } from 'angular-datatables';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-pages-system-admin-educator',
  templateUrl: './pages-system-admin-educator.component.html',
  styleUrls: ['./pages-system-admin-educator.component.scss']
})
export class PagesSystemAdminEducatorComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective | any;

  dtOptions: DataTables.Settings = {};
  users: User[] = [];

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    const _that = this;

    this.dtOptions = {
      serverSide: true,
      processing: true,
      dom: '<"top">rt<"bottom"ip><"clear">',
      ajax: (dataTablesParameters: any, callback) => {

        dataTablesParameters.role = 'Early Childhood Educator';

        _that.userService
          .get(dataTablesParameters, 'system-admin/')
          .subscribe((resp: any) => {
            _that.users = resp.data;

            callback({
              data: resp.data,
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
            });
          });
      },
      columns: [
        { data: 'first_name', title: 'Name' },
        { data: 'email', title: 'Email' },
        { data: 'address', title: 'location' },
        { data: 'uuid', title: 'Last used' },
        { title: 'Action', defaultContent: '', orderable: false }
      ]
    }
  }

  addEducator() {
    this.router.navigate(['system-admin/educators/add']);
  }

  search(val: string) {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.search(val).ajax.reload();
    });
  }

  onDelete(uuid: any) {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure to delete?',
      text: 'Deleting an Early Childhood Educator cannot be undone. Please confirm before continuing',
      confirmButtonText: 'Continue',
      showCancelButton: true,
      confirmButtonColor: '#4ba2ac'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService
          .delete(uuid, {}, 'system-admin/')
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
