import { first } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-pages-system-admin-questions-add-edit',
  templateUrl: './pages-system-admin-questions-add-edit.component.html',
  styleUrls: ['./pages-system-admin-questions-add-edit.component.scss']
})
export class PagesSystemAdminQuestionsAddEditComponent implements OnInit {
  id!: string;
  isAddMode!: boolean;
  questions: any[] = [];
  fieldOptions: any[] = [];

  questionForm: any = {
    type: '',
    static_type: '',
    slug: null,
    title: null,
    field_type: '',
    question_loading: 0,
    field_options: [],
    dependency: {
      question_uuid: '',
      field_options: [],
    }
  };
  errors: any = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private questionService: QuestionService
  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    this.getQuestions();

    if(!this.isAddMode) {
      this.questionService.getById(
          this.id, 'system-admin/', 
          { with: 'fieldOptions,questionDependencies.fieldOption,dependencyQuestion' }
        )
        .pipe(first())
        .subscribe((resp: any) => {
          let fieldOptions: any = [];

          resp.data?.question_dependencies.forEach((data: any) => {
            fieldOptions.push(data?.field_option?.uuid);
          });

          this.questionForm = resp.data;
          this.questionForm.dependency = {
            question_uuid: resp.data.dependency_question?.uuid,
            field_options: fieldOptions,
          }
        });
    }
  }

  getQuestions() {
    let params: any = {
      with: ['fieldOptions'],
      columns: [{ data: "title" }],
      order: [{ column: 0, dir: "asc" }],
    };

    this.questionService.get(params).subscribe((res: any) => {
      this.questions = res.data;
      if(!this.isAddMode) this.onQuestionDependencyChange();
    });

  }

  onQuestionDependencyChange(event: any = null) {
    if(event) {
      let index = event.target[event.target.selectedIndex].getAttribute('data-index');
      this.fieldOptions = this.questions[index].field_options;
    } 
    else {
      let question = this.questions.find(x => x.uuid == this.questionForm.dependency.question_uuid);
      this.fieldOptions = question?.field_options;
    }
  }

  onFieldOptionDependencyChange(event: any) {
    let data = this.questionForm.dependency.field_options || [];
    let fieldOption = this.fieldOptions.find(fieldOption => fieldOption.uuid == event.target.value)

    if(event.target.checked) {
      data.push(fieldOption);
    } 
    else {
      let index = data?.findIndex((val: any) => val == event.target.value);
      data?.splice(index, 1);
    }

    this.questionForm.dependency.field_options = data;
  }

  onSubmit() {
    this.errors = null;
    this.isAddMode ? this.createQuestion() : this.updateQuestion();
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  addOption() {
    this.questionForm.field_options.push({ option: null, operator: '=', value: 0 });
  }

  deleteOption(index: number) {
    this.questionForm.field_options.splice(index, 1);
  }
  

  private createQuestion() {
    this.questionService.add(this.questionForm)
      .pipe(first())
      .subscribe({
        next: (res: any) => {}, 
        error: (error: any) => this.errors = error.errors,
        complete: () => {
          this.toastr.success('', 'Successfully added');
          this.router.navigate(['system-admin/questions']);
        }
      });
  }

  private updateQuestion() {
    this.questionService.update(this.id, this.questionForm)
      .pipe(first())
      .subscribe({
        next: (res: any) => {},
        error: (error: any) => this.errors = error.errors,
        complete: () => {
          this.toastr.info('', 'Record Updated');
          this.router.navigate(['system-admin/questions']);
        }
      });
  }
}
