import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { FaqService } from 'src/app/services/faq.service';
import { AuthService } from 'src/app/services/auth.service';
import { RoleQuestionService } from 'src/app/services/role-question.service';
import { CenterProfileService } from 'src/app/services/center-profile.service';
import { ActivatedRoute } from '@angular/router';
import { SearchHistoryService } from 'src/app/services/search-history.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pages-early-learning-centres-educator-search',
  templateUrl: './pages-early-learning-centres-educator-search.component.html',
  styleUrls: ['./pages-early-learning-centres-educator-search.component.scss']
})
export class PagesEarlyLearningCentresEducatorSearchComponent implements OnInit {
  faqs: any = [];
  questions: any = [];
  centres: any = [];
  errors: any = [];
  form = {
    centers_profile_uuid: "",
    search_name: null,
    // save_template: false,
    role_questions: null,
  };
  candidates: any[] = [];
  searchHistoryUuid: any = null;
  searchHistory: any;
  searchComplete!: boolean;
  sendListsForm: any = {
    email: this.authService.currentUserValue.email,
    preferred_format: ['pdf'],
  }

  constructor(
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private faqService: FaqService,
    public authService: AuthService,
    private roleQuestionService: RoleQuestionService, 
    public ngxSmartModalService: NgxSmartModalService,
    private centerProfileService: CenterProfileService,
    private searchHistoryService: SearchHistoryService,
  ) {
    this.searchHistoryUuid = this.route.snapshot.queryParams['search_history_uuid'];
  }

  ngOnInit(): void {
    if(this.searchHistoryUuid) this.loadSearchHistory();

    this.loadQuestions();
    this.loadCentres();
    this.getFaqs();
  }

  loadSearchHistory() {
    this.searchHistoryService.fetchEducatorSearch(this.searchHistoryUuid, 'early-learning-centres/')
      .subscribe((res: any) => {
        this.form.centers_profile_uuid = res?.data?.centers_profile?.uuid;
        this.form.search_name = res?.data?.search_name;
        this.searchHistory = res?.data;

        let candidates: { first_name: any; total_percentage: any; }[] = [];
        res?.data?.candidates.forEach((candidate: any) => {
          candidates.push({
            first_name: candidate?.user?.first_name,
            total_percentage: candidate?.total_percentage
          });
        });

        this.candidates = candidates;
      });
  }

  loadCentres() {
    this.centerProfileService.get({}, 'early-learning-centres/').subscribe(res => this.centres = res.data);
  }

  loadQuestions() {
    let params: any = {
      columns: [{
        data: "sort",
      }],
      order: [{ column: 0, dir: "asc" }],
      category: 'job-match',
      role: 'Early Learning Centres'
    };

    if(this.searchHistoryUuid) params.search_history_uuid = this.searchHistoryUuid;

    this.roleQuestionService.get(params, 'early-learning-centres/').subscribe(res => this.questions = res?.data);
  }

  getFaqs() {
    this.faqService
      .get({ category: 'new-educator-search' }, 'early-learning-centres/')
      .subscribe(res => this.faqs = res.data);
  }

  search() {
    this.errors = null;
    this.form.role_questions = this.questions;

    this.toastr.info("Searching is now being processed");

    this.centerProfileService
      .educatorSearch(this.form, 'early-learning-centres/')
      .subscribe({
        next: (res: any) => {
          Swal.fire({
            icon: 'success',
            title: 'Search Complete',
            confirmButtonColor: '#4ba2ac',
            timer: 2000
          });

          this.candidates = res?.data?.candidates;
          this.searchHistory = res?.data?.search_history;
          this.searchHistoryUuid = res?.data?.search_history?.uuid;
          this.searchComplete = true;
          this.authService.updateUserLocalStorage();
        },
        error: (error: any) => {
          if(this.errors?.centers_profile_uuid == 'The selected centre is invalid.') {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'The Centre used in the search has been deleted. This search cannot be run again'
            });
          }

          this.errors = error.errors;
        },
        complete: () => {},
      });
  }

  buyList() {
    
    Swal.fire({
      title: 'Are you sure do you want to buy this list?',
      html: '<br>',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      confirmButtonColor: '#4ba2ac',
    }).then((result) => {
      if (result.isConfirmed) {

        this.searchHistoryService.buyList({ search_history_uuid: this.searchHistoryUuid}, 'early-learning-centres/')
          .subscribe({
            next: (res: any) => {
              this.searchHistory = res?.data;
              this.searchHistoryUuid = res?.data?.uuid;
              this.authService.updateUserLocalStorage();

              Swal.fire({icon: 'success', title: 'Success', html: '<br>', confirmButtonColor: '#4ba2ac'});
            },
            error: (error: any) => {
              if(error?.errors?.search_history_uuid == 'You have 0 balance left.') {
                Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: 'You have 0 remaining balance left.',
                  confirmButtonColor: '#4ba2ac',
                });
              } else {
                Swal.fire({icon: 'error', title: 'Something went wrong, Please try again.', html: '<br>', confirmButtonColor: '#4ba2ac'});
              }
            },
            complete: () => {}
          })

      }
    })
  }

  roundTo(num: number, places: number) {
    const factor = 10 ** places;
    return Math.round(num * factor) / factor;
  };

  sendList() {
    this.sendListsForm.search_history_uuid = this.searchHistoryUuid;
    this.centerProfileService.sendLists(this.sendListsForm, 'early-learning-centres/').subscribe({
      next: (res: any) => {
        if(res?.data) {
          Swal.fire({
            icon: 'success', 
            title: 'Sent.', 
            text: 'An email has been sent. Please check your inbox.', 
            confirmButtonColor: '#4ba2ac'
          });
        }
      },
      error: (error: any) => {
        Swal.fire({icon: 'error', title: 'Something went wrong, Please try again.', html: '<br>', confirmButtonColor: '#4ba2ac'});
      },
      complete: () => []
    });
  }

  onChangePerferredFormat(event: any) {
    this.sendListsForm.preferred_format = this.sendListsForm.preferred_format || [];

    if(event.target.checked) {
      this.sendListsForm.preferred_format.push(event.target.value);
    } else {
      let index = this.sendListsForm.preferred_format?.findIndex((val: any) => val == event.target.value);
      this.sendListsForm.preferred_format?.splice(index, 1);
    }
  }
}
