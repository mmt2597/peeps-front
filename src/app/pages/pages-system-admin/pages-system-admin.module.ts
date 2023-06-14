import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTinymceModule } from 'ngx-tinymce';
import { DataTablesModule } from 'angular-datatables';
import { TruncatePipe } from 'src/app/pipes/truncate.pipe';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { CommonPipeModule } from 'src/app/shared/common-pipe.module';
import { HtmlToPlainTextPipe } from 'src/app/pipes/html-to-plain-text.pipe';
import { PagesSystemAdminRoutingModule } from './pages-system-admin-routing.module';
import { PagesSystemAdminUsersComponent } from './pages-system-admin-users/pages-system-admin-users.component';
import { PagesSystemAdminLayoutComponent } from './pages-system-admin-layout/pages-system-admin-layout.component';
import { PagesSystemAdminEducatorComponent } from './pages-system-admin-educator/pages-system-admin-educator.component';
import { PagesSystemAdminWhatsNewComponent } from './pages-system-admin-whats-new/pages-system-admin-whats-new.component';
import { PagesSystemAdminQuestionsComponent } from './pages-system-admin-questions/pages-system-admin-questions.component';
import { PagesSystemAdminJobSearchComponent } from './pages-system-admin-job-search/pages-system-admin-job-search.component';
import { PagesSystemAdminHelpCentreComponent } from './pages-system-admin-help-centre/pages-system-admin-help-centre.component';
import { PagesSystemAdminUsersAddEditComponent } from './pages-system-admin-users-add-edit/pages-system-admin-users-add-edit.component';
import { PagesSystemAdminRoleQuestionsComponent } from './pages-system-admin-role-questions/pages-system-admin-role-questions.component';
import { PagesSystemAdminLearningCenterComponent } from './pages-system-admin-learning-center/pages-system-admin-learning-center.component';
import { PagesSystemAdminEducatorAddEditComponent } from './pages-system-admin-educator-add-edit/pages-system-admin-educator-add-edit.component';
import { PagesSystemAdminStatsAndReportsComponent } from './pages-system-admin-stats-and-reports/pages-system-admin-stats-and-reports.component';
import { PagesSystemAdminWhatsNewAddEditComponent } from './pages-system-admin-whats-new-add-edit/pages-system-admin-whats-new-add-edit.component';
import { PagesSystemAdminQuestionsAddEditComponent } from './pages-system-admin-questions-add-edit/pages-system-admin-questions-add-edit.component';
import { PagesSystemAdminHelpCentreAddEditComponent } from './pages-system-admin-help-centre-add-edit/pages-system-admin-help-centre-add-edit.component';
import { PagesSystemAdminRoleQuestionsAddEditComponent } from './pages-system-admin-role-questions-add-edit/pages-system-admin-role-questions-add-edit.component';
import { PagesSystemAdminLearningCenterAddEditComponent } from './pages-system-admin-learning-center-add-edit/pages-system-admin-learning-center-add-edit.component';



@NgModule({
  declarations: [
    TruncatePipe,
    HtmlToPlainTextPipe,
    PagesSystemAdminUsersComponent,
    PagesSystemAdminLayoutComponent,
    PagesSystemAdminEducatorComponent, 
    PagesSystemAdminWhatsNewComponent, 
    PagesSystemAdminJobSearchComponent, 
    PagesSystemAdminQuestionsComponent, 
    PagesSystemAdminHelpCentreComponent,
    PagesSystemAdminUsersAddEditComponent,
    PagesSystemAdminRoleQuestionsComponent,
    PagesSystemAdminLearningCenterComponent,
    PagesSystemAdminWhatsNewAddEditComponent,
    PagesSystemAdminEducatorAddEditComponent,
    PagesSystemAdminStatsAndReportsComponent,
    PagesSystemAdminQuestionsAddEditComponent,
    PagesSystemAdminHelpCentreAddEditComponent,
    PagesSystemAdminRoleQuestionsAddEditComponent,
    PagesSystemAdminLearningCenterAddEditComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    CommonPipeModule,
    DataTablesModule,
    GooglePlaceModule,
    ReactiveFormsModule,
    PagesSystemAdminRoutingModule,
    NgxTinymceModule.forRoot({
      baseURL: '//cdnjs.cloudflare.com/ajax/libs/tinymce/5.7.1/'
    })
  ],
})
export class PagesSystemAdminModule { }
