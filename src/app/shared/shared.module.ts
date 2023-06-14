import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxSliderModule } from "@angular-slider/ngx-slider"; 
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HelpCenterComponent } from '../components/help-center/help-center.component';
import { AdminMenuComponent } from '../components/admin/admin-menu/admin-menu.component';
import { FormFieldTypeComponent } from '../components/form-field-type/form-field-type.component';
import { AdminSidebarComponent } from '../components/admin/admin-sidebar/admin-sidebar.component';
import { ElcMenuComponent } from '../components/early-learning-centres/elc-menu/elc-menu.component';
import { EceMenuComponent } from '../components/early-childhood-educator/ece-menu/ece-menu.component';
import { AdminJumbotronComponent } from '../components/admin/admin-jumbotron/admin-jumbotron.component';
import { AdminSearchBarComponent } from '../components/admin/admin-search-bar/admin-search-bar.component';
import { UnderConstructionComponent } from '../components/under-construction/under-construction.component';
import { ElcSidebarComponent } from '../components/early-learning-centres/elc-sidebar/elc-sidebar.component';
import { EceSidebarComponent } from '../components/early-childhood-educator/ece-sidebar/ece-sidebar.component';
import { ElcJumbotronComponent } from '../components/early-learning-centres/elc-jumbotron/elc-jumbotron.component';
import { EceJumbotronComponent } from '../components/early-childhood-educator/ece-jumbotron/ece-jumbotron.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ElcMenuComponent,
    EceMenuComponent,
    AdminMenuComponent,
    EceSidebarComponent,
    HelpCenterComponent,
    ElcSidebarComponent,
    ElcJumbotronComponent,
    EceJumbotronComponent,
    AdminSidebarComponent,
    FormFieldTypeComponent,
    AdminJumbotronComponent,
    AdminSearchBarComponent,
    UnderConstructionComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    NgxSliderModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ElcMenuComponent,
    EceMenuComponent,
    AdminMenuComponent,
    EceSidebarComponent,
    HelpCenterComponent,
    ElcSidebarComponent,
    ElcJumbotronComponent,
    EceJumbotronComponent,
    AdminSidebarComponent,
    FormFieldTypeComponent,
    AdminJumbotronComponent,
    AdminSearchBarComponent,
    UnderConstructionComponent
  ]
})
export class SharedModule { }
