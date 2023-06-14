import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesSystemAdminUsersComponent } from './pages-system-admin-users/pages-system-admin-users.component';
import { PagesSystemAdminEducatorComponent } from './pages-system-admin-educator/pages-system-admin-educator.component';
import { PagesSystemAdminWhatsNewComponent } from './pages-system-admin-whats-new/pages-system-admin-whats-new.component';
import { PagesSystemAdminQuestionsComponent } from './pages-system-admin-questions/pages-system-admin-questions.component';
import { PagesSystemAdminJobSearchComponent } from './pages-system-admin-job-search/pages-system-admin-job-search.component';
import { PagesSystemAdminHelpCentreComponent } from './pages-system-admin-help-centre/pages-system-admin-help-centre.component';
import { PagesSystemAdminUsersAddEditComponent } from './pages-system-admin-users-add-edit/pages-system-admin-users-add-edit.component';
import { PagesSystemAdminRoleQuestionsComponent } from './pages-system-admin-role-questions/pages-system-admin-role-questions.component';
import { PagesSystemAdminLearningCenterComponent } from './pages-system-admin-learning-center/pages-system-admin-learning-center.component';
import { PagesSystemAdminStatsAndReportsComponent } from './pages-system-admin-stats-and-reports/pages-system-admin-stats-and-reports.component';
import { PagesSystemAdminEducatorAddEditComponent } from './pages-system-admin-educator-add-edit/pages-system-admin-educator-add-edit.component';
import { PagesSystemAdminWhatsNewAddEditComponent } from './pages-system-admin-whats-new-add-edit/pages-system-admin-whats-new-add-edit.component';
import { PagesSystemAdminQuestionsAddEditComponent } from './pages-system-admin-questions-add-edit/pages-system-admin-questions-add-edit.component';
import { PagesSystemAdminHelpCentreAddEditComponent } from './pages-system-admin-help-centre-add-edit/pages-system-admin-help-centre-add-edit.component';
import { PagesSystemAdminRoleQuestionsAddEditComponent } from './pages-system-admin-role-questions-add-edit/pages-system-admin-role-questions-add-edit.component';
import { PagesSystemAdminLearningCenterAddEditComponent } from './pages-system-admin-learning-center-add-edit/pages-system-admin-learning-center-add-edit.component';

const routes: Routes = [
  {
    path: 'users',
    component: PagesSystemAdminUsersComponent
  },
  {
    path: 'users/add',
    component: PagesSystemAdminUsersAddEditComponent
  },
  {
    path: 'users/:id/edit',
    component: PagesSystemAdminUsersAddEditComponent
  },
  {
    path: 'educators',
    component: PagesSystemAdminEducatorComponent
  },
  {
    path: 'educators/add',
    component: PagesSystemAdminEducatorAddEditComponent
  },
  {
    path: 'educators/:id/edit',
    component: PagesSystemAdminEducatorAddEditComponent
  },
  {
    path: 'learning-centers',
    component: PagesSystemAdminLearningCenterComponent
  },
  {
    path: 'learning-centers/add',
    component: PagesSystemAdminLearningCenterAddEditComponent
  },
  {
    path: 'learning-centers/:id/edit',
    component: PagesSystemAdminLearningCenterAddEditComponent
  },
  {
    path: 'job-search',
    component: PagesSystemAdminJobSearchComponent
  },
  {
    path: 'whats-new',
    component: PagesSystemAdminWhatsNewComponent
  },
  {
    path: 'whats-new/add',
    component: PagesSystemAdminWhatsNewAddEditComponent
  },
  {
    path: 'whats-new/:id/edit',
    component: PagesSystemAdminWhatsNewAddEditComponent
  },
  {
    path: 'questions',
    component: PagesSystemAdminQuestionsComponent,
  },
  {
    path: 'questions/add',
    component: PagesSystemAdminQuestionsAddEditComponent,
  },
  {
    path: 'questions/:id/edit',
    component: PagesSystemAdminQuestionsAddEditComponent,
  },
  {
    path: 'role-questions',
    component: PagesSystemAdminRoleQuestionsComponent
  },
  {
    path: 'role-questions/add',
    component: PagesSystemAdminRoleQuestionsAddEditComponent
  },
  {
    path: 'role-questions/:id/edit',
    component: PagesSystemAdminRoleQuestionsAddEditComponent
  },
  {
    path: 'stats-and-reports',
    component: PagesSystemAdminStatsAndReportsComponent
  },
  {
    path: 'help-centre',
    component: PagesSystemAdminHelpCentreComponent
  },
  {
    path: 'help-centre/add',
    component: PagesSystemAdminHelpCentreAddEditComponent
  },
  {
    path: 'help-centre/:id/:edit',
    component: PagesSystemAdminHelpCentreAddEditComponent
  },
  {
    path: '**',
    redirectTo: 'educators'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesSystemAdminRoutingModule { }
