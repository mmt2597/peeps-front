import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective, DataTablesModule } from 'angular-datatables';
import { RoleQuestionService } from 'src/app/services/role-question.service';

const apiUrl = environment.apiUrl;

declare var $: any;

@Component({
  selector: 'app-pages-system-admin-role-questions',
  templateUrl: './pages-system-admin-role-questions.component.html',
  styleUrls: ['./pages-system-admin-role-questions.component.scss']
})
export class PagesSystemAdminRoleQuestionsComponent implements OnInit, OnDestroy {
  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective | any;

  dtOptions: any;
  roleQuestions: any = [];
  pageRole: string = 'Early Learning Centres';
  category: string = 'centre-profile';
  eventLoaded: boolean = false;
  totalPercentage: Number = 0;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private roleQuestionService: RoleQuestionService
  ) { }

  ngOnInit(): void {
    this.initDT();
    this.initButtonActions();
    this.getTotalPercentage();
  }

  ngOnDestroy(): void {
    $('body').off('click');
  }

  getTotalPercentage() {
    this.roleQuestionService.getTotalPercentage({}, 'system-admin/').subscribe({
      next: (res: any) => this.totalPercentage = res?.data.total_percentage,
      error: (error: any) => {},
      complete: () => {}
    });
  }

  initDT() {
    const _that = this;

    this.dtOptions = {
      serverSide: true,
      processing: true,
      rowReorder: { 
        selector: 'tr td:not(:last-of-type)',
        dataSrc: 'sort',
        update: false
      },
      dom: '<"top">rt<"bottom"ip><"clear">',
      order: [[2, 'asc']],
      ajax: (dataTablesParameters: any, callback: Function) => {

        // Params
        dataTablesParameters.role = this.pageRole;
        dataTablesParameters.category = this.category;

        this.roleQuestionService
          .get(dataTablesParameters, 'system-admin/')
          .subscribe((resp: any) => {
            _that.roleQuestions = resp.data;

            callback({
              data: resp.data,
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
            });

            if(this.eventLoaded == false) {
              this.eventLoaded = true;
              _that.initRowReorderEvent()
            };
          });
      },
      columns: [
        {
          data: 'screen_label',
          title: 'Screen Label'
        },
        { 
          data: 'question.title', 
          name:'question.title', 
          title: 'Question',
          render: (value: any, type: any, row: any) => { 
            let percentage = (this.pageRole == 'Early Learning Centres' && this.category == 'job-match') ? ` (${row.question?.question_loading}%)` : ''; 
            return `<span data-uuid="${row.uuid}">${value}${percentage}</td>`; 
          }
        },
        { data: 'sort', name: 'sort', title: 'Sort' },
        { 
          data: 'uuid',
          title: 'Action', 
          orderable: false, 
          searchable: false, 
          defaultContent: '',
          render: (uuid: any, type: any, row: any) => {
            let htmlButtonLists = [
              `<li><a href="javascript:;" data-uuid="${uuid}" data-button-type="edit" class="dropdown-item">Edit</a></li>`,
              `<li><a href="javascript:;" data-uuid="${uuid}" data-button-type="delete" class="dropdown-item">Delete</a></li>`,
            ].join('');

            let htmlDropdown = [
              '<div class="dropdown button-actions">',
                `<button class="btn btn-primary dropdown-toggle" id="${uuid}" type="button" data-bs-toggle="dropdown" aria-expanded="false">`,
                  'More Actions',
                '</button>',
              `<ul class="dropdown-menu" aria-labelledby="${uuid}">${htmlButtonLists}</ul>`,
            ].join('');

            return htmlDropdown;
          }
        }
      ]
    }
  }

  initButtonActions() {
    let _that = this;

    $('body').on('click', '.button-actions a.dropdown-item', (event: Event) => {
      event.stopPropagation();

      var button = $(event.target);
      var uuid = button.data('uuid');
      var buttonType = button.data('button-type');

      if(buttonType == 'edit') this.edit(uuid);
      if(buttonType == 'delete') this.delete(uuid);
    });
  }

  search(val: string) {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.search(val).ajax.reload();
    });
  }

  onAddQuestion() {
    this.router.navigate(['system-admin/role-questions/add']);
  }

  edit(uuid: string) {
    this.router.navigate([`system-admin/role-questions/${uuid}/edit`]);
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
        this.roleQuestionService
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

  changePageRole(pageRole: string) {
    if(this.pageRole !== pageRole) {
      this.pageRole = pageRole;
      this.category = pageRole == 'Early Learning Centres' ? 'centre-profile' : 'education-experience';
      this.dtReload();
    }
  }

  changeCategory(event: Event) {
    this.dtReload();
  }

  dtReload() {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.ajax.reload();
    });
  }

  initRowReorderEvent() {
    
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.on('row-reorder', (e, details, edit) => {

        if(details.length) {
          let rows: any = [];
          details.forEach((element: any) => {
            rows.push({
              uuid: $(element.node).find('span').data('uuid'),
              sort: (element.newPosition + 1)
            });
          });

          this.updateReorder({rows: rows, role: this.pageRole, category: this.category});
        }
        dtInstance.off('row-reorder');
        this.initRowReorderEvent();
      });
    })
  }

  updateReorder(data: any) {
    this.roleQuestionService.reorder(data, 'system-admin/')
      .subscribe({
        next: (res: any) => {},
        error: (error: Error) => this.toastr.error("Reordering failed"),
        complete: () => this.dtReload()
      });
  }
}
