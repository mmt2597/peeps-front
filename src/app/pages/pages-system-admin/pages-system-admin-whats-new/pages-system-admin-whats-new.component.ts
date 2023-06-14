import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Article } from 'src/app/models/article';
import { DataTableDirective } from 'angular-datatables';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-pages-system-admin-whats-new',
  templateUrl: './pages-system-admin-whats-new.component.html',
  styleUrls: ['./pages-system-admin-whats-new.component.scss']
})
export class PagesSystemAdminWhatsNewComponent implements OnInit {
  @ViewChild(DataTableDirective, {static: false})

  dtElement!: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  articles: Article[] = [];

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private articleService: ArticleService
  ) {
  }

  ngOnInit(): void {
    const _that = this;

    this.dtOptions = {
      serverSide: true,
      processing: true,
      dom: '<"top">rt<"bottom"ip><"clear">',
      ajax: (dataTablesParameters: any, callback) => {
        _that.articleService
          .get(dataTablesParameters, 'system-admin/')
          .subscribe((resp: any) => {
            _that.articles = resp.data;

            callback({
              data: resp.data,
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered
            });
          });
      },
      columns: [
        { data: 'title', title: 'Title' },
        { data: 'content', title: 'Content' },
        { title: 'Action', defaultContent: '', orderable: false }
      ]
    };
  }

  onAddArticle() {
    this.router.navigate(['system-admin/whats-new/add']);
  }

  search(val: string) {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.search(val).ajax.reload();
    });
  }

  deleteArticle(id: any): any {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure to delete?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      confirmButtonColor: '#4ba2ac'
    }).then((result) => {
      if (result.isConfirmed) {
        this.articleService.delete(id, 'system-admin/')
          .subscribe(
            res => {},
            error => {},
            () => {
              this.dtElement.dtInstance.then((dtInsance: DataTables.Api) => dtInsance.draw());
              this.toastr.success('', 'Successfully deleted');
            }
          );
      }
    });
  }
}
