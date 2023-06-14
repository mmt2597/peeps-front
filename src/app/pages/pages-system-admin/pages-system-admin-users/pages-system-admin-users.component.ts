import { DataTableDirective } from 'angular-datatables';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-pages-system-admin-users',
  templateUrl: './pages-system-admin-users.component.html',
  styleUrls: ['./pages-system-admin-users.component.scss']
})
export class PagesSystemAdminUsersComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective | any;

  dtOptions: DataTables.Settings = {};
  users: any = [];

  constructor(
    private router: Router,
    private http: HttpClient,
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

        dataTablesParameters.role = 'System Admin';

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

  addUser() {
    this.router.navigate(['system-admin/users/add']);
  }

  search(val: string) {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.search(val).ajax.reload();
    });
  }
}
