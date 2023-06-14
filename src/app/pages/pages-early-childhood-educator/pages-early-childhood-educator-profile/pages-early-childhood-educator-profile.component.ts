import { first } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FaqService } from 'src/app/services/faq.service';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserQuestionService } from 'src/app/services/user-question.service';

class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-pages-early-childhood-educator-profile',
  templateUrl: './pages-early-childhood-educator-profile.component.html',
  styleUrls: ['./pages-early-childhood-educator-profile.component.scss']
})
export class PagesEarlyChildhoodEducatorProfileComponent implements OnInit {
  page = 'personal-information';
  faqs: any[] = [];
  data: any = {
    user: {
      avatar: null,
      first_name: null,
      middle_name: null,
      last_name: null,
      email: null,
      phone_number: null,
      address: null,
      address2: null,
      suburb: null,
      city: null,
      state: null,
      post_code: null,
      country: null,
      lat: null,
      lng: null,
    },
    questions: [],
  };
  userErrors: any;
  questionErrors: any;
  selectedFile!: ImageSnippet; 

  options: any = {
    componentRestrictions: {
      country: ['AU']
    }
  };

  constructor(
    private toastr: ToastrService,
    private faqService: FaqService,
    private userService: UserService,
    private authService: AuthService,
    private userQuestionService: UserQuestionService,
  ) {

  }

  ngOnInit(): void {

    // load profile details
    this.userService.getUserInfo()
      .pipe(first())
      .subscribe((res: any) => this.data.user = res.data);

    // Load dynamic questions
    this.userQuestionService
      .getQuestions({ category: 'personal-information' }, 'early-childhood-educator/')
      .pipe(first())
      .subscribe((res: any) => this.data.questions = res.data);

    this.getFaqs();
  }

  getFaqs() {
    this.faqService
      .get({ category: 'personal-information' }, 'early-childhood-educator/')
      .subscribe(res => this.faqs = res.data);
  }

  public AddressChange(address: any) {
    this.data.user.address = address.formatted_address;
    this.data.user.lat = address.geometry.location.lat(); 
    this.data.user.lng = address.geometry.location.lng();

    address.address_components.find((component: any, i: Number) => {
      let types = component.types;

      if(types.includes('country')) this.data.user.country = component.long_name;
      if(types.includes('administrative_area_level_1')) this.data.user.state = component.short_name;
      if(types.includes('locality')) this.data.user.city = component.long_name;
      if(types.includes('postal_code')) this.data.user.post_code = component.long_name;
    });

  }

  private onSuccess() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
  }

  private onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
  }

  onUploadImage(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    if(file) {
      reader.addEventListener('load', (event: any) => {
        this.selectedFile = new ImageSnippet(event.target.result, file);
        this.userService.uploadAvatar(this.selectedFile.file).subscribe(
          res => { 
            this.data.user.avatar_url = res.data?.url;
            this.authService.updateUserLocalStorage();

          },
          err => this.onError()
        )
      });

      reader.readAsDataURL(file);
    }
  }

  onUpdate() {
    this.resetError();
    this.updateUser();
    this.updateUserQuestion();
  }

  private updateUser() {
    this.userService.updateProfile(this.data.user).subscribe(
      res => {},
      error => this.userErrors = error.errors,
      () => {
        this.toastr.info('Record Updated');
      }
    );  
  }

  private updateUserQuestion() {
    let answers = this.data.questions.map((val: any) => {
      return {
        'uuid': val.uuid,
        'answer': val.answer,
        'field_type': val.question.field_type,
      };
    });

    this.userQuestionService
      .updateOrCreateQuestions({user_questions: answers}, 'early-childhood-educator/')
      .subscribe({
        next: (res: any) => {},
        error: (error: Error) => this.questionErrors = error,
        complete: () => {}
      });
  }

  private resetError() {
    this.userErrors = null;
    this.questionErrors = null;
  }
}
