import { first } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FaqService } from 'src/app/services/faq.service';
import { QuestionService } from 'src/app/services/question.service';
import { UserQuestionService } from 'src/app/services/user-question.service';

@Component({
  selector: 'app-pages-early-childhood-educator-work-experience',
  templateUrl: './pages-early-childhood-educator-work-experience.component.html',
  styleUrls: ['./pages-early-childhood-educator-work-experience.component.scss']
})
export class PagesEarlyChildhoodEducatorWorkExperienceComponent implements OnInit {

  faqs: any[] = [];
  questions: any = [];
  questionErrors: any = [];

  constructor(
    private toastr: ToastrService,
    private faqService: FaqService,
    private userQuestionService: UserQuestionService
  ) { }

  ngOnInit(): void {
    // Load Dynamic Questions
    this.userQuestionService
      .getQuestions({ category: 'work-experience' }, 'early-childhood-educator/')
      .pipe(first())
      .subscribe((res: any) => this.questions = res.data);
    
    this.getFaqs();
  }

  getFaqs() {
    this.faqService
      .get({ category: 'work-experience' }, 'early-childhood-educator/')
      .subscribe(res => this.faqs = res.data);
  }

  onUpdate() {
    let answers = this.questions.map((val: any) => {
      return {
        'uuid': val.uuid,
        'answer': val.answer,
        'field_type': val.field_type,
      };
    });

    this.userQuestionService
      .updateOrCreateQuestions({user_questions: answers}, 'early-childhood-educator/')
      .subscribe(
        res => {},
        error => this.questionErrors = error.errors,
        () => {
          this.toastr.info('Record Updated');
        }
      );
  }

}
