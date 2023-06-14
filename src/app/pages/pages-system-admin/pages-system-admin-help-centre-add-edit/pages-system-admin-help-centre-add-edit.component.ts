import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FaqService } from 'src/app/services/faq.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-pages-system-admin-help-centre-add-edit',
  templateUrl: './pages-system-admin-help-centre-add-edit.component.html',
  styleUrls: ['./pages-system-admin-help-centre-add-edit.component.scss']
})
export class PagesSystemAdminHelpCentreAddEditComponent implements OnInit {
  id!: string;
  isAddMode!: boolean;
  faqForm: FormGroup;
  errors: any = null;

  faqs: any = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private faqService: FaqService
  ) 
  {
    this.faqForm = this.formBuilder.group({
      role: [''],
      category: [''],
      question: [''],
      answer: ['']
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    if(!this.isAddMode) {
      this.faqService.getById(this.id, 'system-admin/')
        .pipe(first())
        .subscribe((resp: any) => {
          this.faqForm.patchValue({
            role: resp.data?.role?.name ?? 'Static Page',
            category: resp.data?.category,
            question: resp.data?.question,
            answer: resp.data?.answer
          });
        });
    }
  }

  onSubmit() {
    this.isAddMode ? this.createFAQ() : this.updateFAQ();
  }

  createFAQ() {
    this.errors = null;
    this.faqService
    .add(this.faqForm.value, 'system-admin/')
    .pipe(first())
    .subscribe({
      next: (resp: any) => {},
      error: (error: any) => this.errors = error?.errors,
      complete: () => {
        this.toastr.success('', 'Successfully added');
        this.router.navigate(['system-admin/help-centre']);
      }
    });
  }

  updateFAQ() {
    this.errors = null;
    this.faqService
    .update(this.id ,this.faqForm.value, 'system-admin/')
    .pipe(first())
    .subscribe({
      next: (res: any) => {},
      error: (error: any) => this.errors = error?.errors,
      complete: () => {
        this.toastr.success('', 'Successfully updated');
        this.router.navigate(['system-admin/help-centre']);
      }
    });
  }
}
