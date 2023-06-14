import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { CommonPipeModule } from 'src/app/shared/common-pipe.module';
import { PagesEarlyLearningCentresRoutingModule } from './pages-early-learning-centres-routing.module';
import { PagesEarlyLearningCentresLayoutComponent } from './pages-early-learning-centres-layout/pages-early-learning-centres-layout.component';
import { PagesEarlyLearningCentresProfileComponent } from './pages-early-learning-centres-profile/pages-early-learning-centres-profile.component';
import { PagesEarlyLearningCentresBillingComponent } from './pages-early-learning-centres-billing/pages-early-learning-centres-billing.component';
import { PagesEarlyLearningCentresSearchHistoryComponent } from './pages-early-learning-centres-search-history/pages-early-learning-centres-search-history.component';
import { PagesEarlyLearningCentresEducatorSearchComponent } from './pages-early-learning-centres-educator-search/pages-early-learning-centres-educator-search.component';
import { PagesEarlyLearningCentresSearchTemplateComponent } from './pages-early-learning-centres-search-template/pages-early-learning-centres-search-template.component';
import { PagesEarlyLearningCentresCentersProfileComponent } from './pages-early-learning-centres-centers-profile/pages-early-learning-centres-centers-profile.component';
import { PagesEarlyLearningCentresChangePasswordComponent } from './pages-early-learning-centres-change-password/pages-early-learning-centres-change-password.component';
import { PagesEarlyLearningCentersProfileAddEditComponent } from './pages-early-learning-centers-profile-add-edit/pages-early-learning-centers-profile-add-edit.component';
import { PagesEarlyLearningCentresSearchHistoryEditComponent } from './pages-early-learning-centres-search-history-edit/pages-early-learning-centres-search-history-edit.component';



@NgModule({
  declarations: [
    PagesEarlyLearningCentresLayoutComponent,
    PagesEarlyLearningCentresProfileComponent,
    PagesEarlyLearningCentresBillingComponent,
    PagesEarlyLearningCentresSearchHistoryComponent,
    PagesEarlyLearningCentresEducatorSearchComponent,
    PagesEarlyLearningCentresSearchTemplateComponent,
    PagesEarlyLearningCentresCentersProfileComponent,
    PagesEarlyLearningCentersProfileAddEditComponent,
    PagesEarlyLearningCentresChangePasswordComponent,
    PagesEarlyLearningCentresSearchHistoryEditComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    DataTablesModule,
    CommonPipeModule,
    GooglePlaceModule,
    ReactiveFormsModule,
    NgxSmartModalModule.forRoot(),
    PagesEarlyLearningCentresRoutingModule
  ]
})
export class PagesEarlyLearningCentresModule { }
