import { first } from 'rxjs';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { RoleQuestionService } from 'src/app/services/role-question.service';


@Component({
  selector: 'app-pages-system-admin-role-questions-add-edit',
  templateUrl: './pages-system-admin-role-questions-add-edit.component.html',
  styleUrls: ['./pages-system-admin-role-questions-add-edit.component.scss']
})
export class PagesSystemAdminRoleQuestionsAddEditComponent implements OnInit {
  id!: string;
  isAddMode!: boolean;
  roleQuestionForm: FormGroup;
  errors: any = null;

  questions: any = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private questionService: QuestionService,
    private roleQuestionService: RoleQuestionService
  ) {

    this.roleQuestionForm = this.formBuilder.group({
      screen_label: [''],
      description: [''],
      placeholder: [''],
      default_value: [''],
      role: [''],
      question_uuid: [''],
      category: [''],
      class_wrapper: [''],
    });

    this.getQuestions();

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    if(!this.isAddMode) {
      this.roleQuestionService.getById(this.id, 'system-admin/')
        .pipe(first())
        .subscribe((resp: any) => {
          this.roleQuestionForm.patchValue({
            screen_label: resp?.data?.screen_label,
            description: resp?.data?.description,
            placeholder: resp?.data?.placeholder,
            default_value: resp?.data?.default_value,
            role: resp.data?.role?.name,
            question_uuid: resp.data?.question?.uuid,
            category: resp.data?.category,
            class_wrapper: resp.data?.class_wrapper,
          });
        });
    }
  }

  getQuestions() {
    this.questionService
      .get({
        "columns": [{ "data": "title" }],
        "order": [{ "column": 0, "dir": "asc" }]
      })
      .subscribe({
        next: (res: any) => this.questions = res?.data,
        error: (e) => {},
        complete: () => {} 
      })
  }

  onSubmit() {
    this.errors = null;
    this.isAddMode ? this.createQuestion() : this.updateQuestion();
  }

  createQuestion() {
    this.roleQuestionService
    .add(this.roleQuestionForm.value, 'system-admin/')
    .pipe(first())
    .subscribe({
      next: (resp: any) => {},
      error: (error: any) => {
        if(this.hasCustomErrorPopup(error)) return;
        this.errors = error?.errors
      },
      complete: () => {
        this.toastr.success('', 'Successfully added');
        this.router.navigate(['system-admin/role-questions']);
      }
    });
  }

  updateQuestion() {
    this.roleQuestionService
    .update(this.id ,this.roleQuestionForm.value, 'system-admin/')
    .pipe(first())
    .subscribe({
      next: (res: any) => {},
      error: (error: any) => {
        if(this.hasCustomErrorPopup(error)) return;
        this.errors = error?.errors
      },
      complete: () => {
        this.toastr.success('', 'Successfully updated');
        this.router.navigate(['system-admin/role-questions']);
      }
    });
  }

  hasCustomErrorPopup(error: any) {
    if(error?.errors?.question_uuid[0] == "The question is already displayed on this page.") {
      Swal.fire({
        icon: 'warning',
        title: 'Duplicate Question',
        text: error?.errors?.question_uuid[0]
      });

      return true;
    }

    return false;
  }
}
