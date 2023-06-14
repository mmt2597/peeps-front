import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesEarlyLearningCentresProfileComponent } from './pages-early-learning-centres-profile/pages-early-learning-centres-profile.component';
import { PagesEarlyLearningCentresBillingComponent } from './pages-early-learning-centres-billing/pages-early-learning-centres-billing.component';
import { PagesEarlyLearningCentresSearchHistoryComponent } from './pages-early-learning-centres-search-history/pages-early-learning-centres-search-history.component';
import { PagesEarlyLearningCentresCentersProfileComponent } from './pages-early-learning-centres-centers-profile/pages-early-learning-centres-centers-profile.component';
import { PagesEarlyLearningCentresEducatorSearchComponent } from './pages-early-learning-centres-educator-search/pages-early-learning-centres-educator-search.component';
import { PagesEarlyLearningCentresSearchTemplateComponent } from './pages-early-learning-centres-search-template/pages-early-learning-centres-search-template.component';
import { PagesEarlyLearningCentresChangePasswordComponent } from './pages-early-learning-centres-change-password/pages-early-learning-centres-change-password.component';
import { PagesEarlyLearningCentersProfileAddEditComponent } from './pages-early-learning-centers-profile-add-edit/pages-early-learning-centers-profile-add-edit.component';
import { PagesEarlyLearningCentresSearchHistoryEditComponent } from './pages-early-learning-centres-search-history-edit/pages-early-learning-centres-search-history-edit.component';


const routes: Routes = [
  {
    path: 'change-password',
    component: PagesEarlyLearningCentresChangePasswordComponent
  },
  {
    path: 'profile',
    component: PagesEarlyLearningCentresProfileComponent
  },
  {
    path: 'educator-search',
    component: PagesEarlyLearningCentresEducatorSearchComponent
  },
  {
    path: 'search-history',
    component: PagesEarlyLearningCentresSearchHistoryComponent
  },
  {
    path: 'search-history/:uuid/edit',
    component: PagesEarlyLearningCentresSearchHistoryEditComponent
  },
  {
    path: 'search-template',
    component: PagesEarlyLearningCentresSearchTemplateComponent
  },
  {
    path: 'centers-profile',
    component: PagesEarlyLearningCentresCentersProfileComponent
  },
  {
    path: 'centers-profile/add',
    component: PagesEarlyLearningCentersProfileAddEditComponent
  },
  {
    path: 'centers-profile/:id/edit',
    component: PagesEarlyLearningCentersProfileAddEditComponent
  },
  {
    path: 'billing',
    component: PagesEarlyLearningCentresBillingComponent
  },
  {
    path: '**',
    redirectTo: 'educator-search'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesEarlyLearningCentresRoutingModule { }
