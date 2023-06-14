import { first } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-pages-system-admin-whats-new-add-edit',
  templateUrl: './pages-system-admin-whats-new-add-edit.component.html',
  styleUrls: ['./pages-system-admin-whats-new-add-edit.component.scss']
})
export class PagesSystemAdminWhatsNewAddEditComponent implements OnInit {
  id!: string;
  errors!: any;
  isAddMode!: boolean;
  imagePreview: string = '';
  articleForm: FormGroup;
  selectedFile!: null

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private articleService: ArticleService,
  ) {
    this.articleForm = this.formBuilder.group({
      title: [''],
      content: ['']
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    if(!this.isAddMode) {
      this.articleService
        .getById(this.id, 'system-admin/')
        .pipe(first())
        .subscribe((resp: any) => {
          this.imagePreview = resp.data?.image_url;
          this.articleForm.patchValue(resp.data);
        });
    }
  }

  onSubmit() {
    this.errors = null;
    this.isAddMode ? this.createArticle() : this.updateArticle();
  }

  private createArticle() {
    const formData = this.transformJsonToFormData(this.removeEmpty(this.articleForm.value));
    if(this.selectedFile) formData.append('image', this.selectedFile);

    this.articleService.add(formData, 'system-admin/')
      .pipe(first())
      .subscribe({
        next: () => {},
        error: (error: any) => this.errors = error.errors,
        complete: () => {
          this.toastr.success('', 'Successfully added');
          this.router.navigate(['system-admin/whats-new']);
        }
      });
  }

  private updateArticle() {
    const formData = this.transformJsonToFormData(this.removeEmpty(this.articleForm.value));
    if(this.selectedFile) formData.append('image', this.selectedFile);

    this.articleService.update(this.id, formData, 'system-admin/')
      .pipe(first())
      .subscribe({
        next: () => {},
        error: (error: any) => this.errors = error?.errors,
        complete: () => {
          this.toastr.info('', 'Record Updated');
          this.router.navigate(['system-admin/whats-new']);
        }
      });
  }

  onUploadImage(event: any) {
    const file = event.files[0];
    const reader = new FileReader;
    this.selectedFile = file;

    reader.onload = () => this.imagePreview = reader.result as string;
    reader.readAsDataURL(file);
  }

  removeEmpty(obj: Object): any {
    return Object.fromEntries(
      Object.entries(obj)
        .filter(([_, v]) => v != null)
        .map(([k, v]) => [k, v === Object(v) ? this.removeEmpty(v) : v])
    );
  }

  private transformJsonToFormData(values: any) {
    const formData = new FormData();

    for(let key of Object.keys(values)) {
      formData.append(key, values[key]);
    }

    return formData;
  }
}
