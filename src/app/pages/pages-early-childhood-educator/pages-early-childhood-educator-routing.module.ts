import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesEarlyChildhoodEducatorProfileComponent } from './pages-early-childhood-educator-profile/pages-early-childhood-educator-profile.component';
import { PagesEarlyChildhoodEducatorDashboardComponent } from './pages-early-childhood-educator-dashboard/pages-early-childhood-educator-dashboard.component';
import { PagesEarlyChildhoodEducatorEducationComponent } from './pages-early-childhood-educator-education/pages-early-childhood-educator-education.component';
import { PagesEarlyChildhoodEducatorWorkExperienceComponent } from './pages-early-childhood-educator-work-experience/pages-early-childhood-educator-work-experience.component';
import { PagesEarlyChildhoodEducatorChangePasswordComponent } from './pages-early-childhood-educator-change-password/pages-early-childhood-educator-change-password.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesEarlyChildhoodEducatorDashboardComponent,
  },
  {
    path: 'change-password',
    component: PagesEarlyChildhoodEducatorChangePasswordComponent,
  },
  {
    path: 'profile',
    component: PagesEarlyChildhoodEducatorProfileComponent
  },
  {
    path: 'education-experience',
    component: PagesEarlyChildhoodEducatorEducationComponent
  },
  {
    path: 'work-experience',
    component: PagesEarlyChildhoodEducatorWorkExperienceComponent
  },
  {
    path: '**',
    redirectTo: 'profile'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesEarlyChildhoodEducatorRoutingModule { }
