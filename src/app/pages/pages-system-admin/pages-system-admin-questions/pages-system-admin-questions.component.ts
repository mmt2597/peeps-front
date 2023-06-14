import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Question } from 'src/app/models/question';
import { DataTableDirective } from 'angular-datatables';
import { environment } from 'src/environments/environment';
import { Component, OnInit, ViewChild } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { DataTablesResponse } from 'src/app/models/data-tables-response';

const apiUrl = environment.apiUrl;

@Component({
  selector: 'app-pages-system-admin-questions',
  templateUrl: './pages-system-admin-questions.component.html',
  styleUrls: ['./pages-system-admin-questions.component.scss']
})
export class PagesSystemAdminQuestionsComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective | any;

  dtOptions: DataTables.Settings = {};
  questions: Question[] = [];

  constructor(
    private router: Router,
    private http: HttpClient,
    private toastr: ToastrService,
    private questionService: QuestionService
  ) { }

  ngOnInit(): void {
    const _that = this;

    this.dtOptions = {
      serverSide: true,
      processing: true,
      dom: '<"top">rt<"bottom"ip><"clear">',
      // searching: false,
      ajax: (dataTablesParameters: any, callback) => {
        _that.http
          .post<DataTablesResponse>(
            `${apiUrl}system-admin/question/search`,
            dataTablesParameters,
          )
          .subscribe((resp: any) => {
            _that.questions = resp.data;

            callback({
              data: resp.data,
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
            });
          });
      },
      columns: [
        { data: 'title', title: 'Title' },
        { data: 'type', title: 'Type' },
        { data: 'field_type', title: 'Field Type' },
        { title: 'Action', defaultContent: '', orderable: false }
      ]
    }
  }

  addQuestion() {
    this.router.navigate(['system-admin/questions/add']);
  }

  search(val: string) {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.search(val).ajax.reload();
    });
  }

  delete(uuid: any) {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure to delete?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      confirmButtonColor: '#4ba2ac'
    }).then((result) => {
      if (result.isConfirmed) {
        this.questionService
          .delete(uuid, null, 'system-admin/')
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

  dtReload() {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.ajax.reload();
    });
  }
}
