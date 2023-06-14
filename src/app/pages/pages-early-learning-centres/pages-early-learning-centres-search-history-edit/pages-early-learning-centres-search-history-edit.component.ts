import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FaqService } from 'src/app/services/faq.service';
import { CenterProfileService } from 'src/app/services/center-profile.service';
import { SearchHistoryService } from 'src/app/services/search-history.service';

@Component({
  selector: 'app-pages-early-learning-centres-search-history-edit',
  templateUrl: './pages-early-learning-centres-search-history-edit.component.html',
  styleUrls: ['./pages-early-learning-centres-search-history-edit.component.scss']
})
export class PagesEarlyLearningCentresSearchHistoryEditComponent implements OnInit {

  faqs: any[] = [];
  uuid!: string;
  errors: any = [];
  centersProfiles: any[] = [];
  searchHistoryForm = {
    centers_profile_uuid: null,
    search_name: null,
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private faqService: FaqService,
    private searchHistoryService: SearchHistoryService,
    private centersProfileService: CenterProfileService,
  ) {}

  ngOnInit(): void {
    this.uuid = this.route.snapshot.params['uuid'];
    this.initData();
    this.getFaqs();
  }

  private initData() {
    this.centersProfileService
      .get(null, 'early-learning-centres/')
      .subscribe(res => this.centersProfiles = res.data);

    this.searchHistoryService
      .getByUuid(this.uuid, 'early-learning-centres/')
      .subscribe((res: any) => {
        let data = res?.data;

        this.searchHistoryForm.search_name = data?.search_name;
        this.searchHistoryForm.centers_profile_uuid = data?.centers_profile?.uuid;
      })
  }

  getFaqs() {
    this.faqService
      .get({ category: 'search-history' }, 'early-learning-centres/')
      .subscribe(res => this.faqs = res.data);
  }


  update() {
    this.searchHistoryService
      .update(this.uuid, this.searchHistoryForm, 'early-learning-centres/')
      .subscribe({
        next: (res: any) => {
          this.router.navigate(['early-learning-centres/search-history']);
          this.toastr.info("Record Updated");
        },
        error: (error: any) => this.errors = error.errors,
        complete: () => {},
      });
  }
}
