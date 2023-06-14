import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { CommonPipeModule } from 'src/app/shared/common-pipe.module';
import { PagesEarlyChildhoodEducatorRoutingModule } from './pages-early-childhood-educator-routing.module';
import { PagesEarlyChildhoodEducatorLayoutComponent } from './pages-early-childhood-educator-layout/pages-early-childhood-educator-layout.component';
import { PagesEarlyChildhoodEducatorProfileComponent } from './pages-early-childhood-educator-profile/pages-early-childhood-educator-profile.component';
import { PagesEarlyChildhoodEducatorEducationComponent } from './pages-early-childhood-educator-education/pages-early-childhood-educator-education.component';
import { PagesEarlyChildhoodEducatorDashboardComponent } from './pages-early-childhood-educator-dashboard/pages-early-childhood-educator-dashboard.component';
import { PagesEarlyChildhoodEducatorWorkExperienceComponent } from './pages-early-childhood-educator-work-experience/pages-early-childhood-educator-work-experience.component';
import { PagesEarlyChildhoodEducatorChangePasswordComponent } from './pages-early-childhood-educator-change-password/pages-early-childhood-educator-change-password.component';




@NgModule({
  declarations: [
    PagesEarlyChildhoodEducatorLayoutComponent,
    PagesEarlyChildhoodEducatorProfileComponent,
    PagesEarlyChildhoodEducatorEducationComponent,
    PagesEarlyChildhoodEducatorDashboardComponent,
    PagesEarlyChildhoodEducatorWorkExperienceComponent,
    PagesEarlyChildhoodEducatorChangePasswordComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    CommonPipeModule,
    GooglePlaceModule,
    PagesEarlyChildhoodEducatorRoutingModule
  ]
})
export class PagesEarlyChildhoodEducatorModule { }
