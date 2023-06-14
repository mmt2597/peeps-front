import { NgModule } from '@angular/core';
import { Role } from '../models/role.model';
import { AuthGuard } from '../guards/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { HasRoleGuard } from '../guards/has-role.guard';
import { IsAuthenticatedGuard } from '../guards/is-authenticated.guard';
import { PagesSystemAdminLayoutComponent } from './pages-system-admin/pages-system-admin-layout/pages-system-admin-layout.component';
import { PagesEarlyChildhoodEducatorLayoutComponent } from './pages-early-childhood-educator/pages-early-childhood-educator-layout/pages-early-childhood-educator-layout.component';
import { PagesEarlyLearningCentresLayoutComponent } from './pages-early-learning-centres/pages-early-learning-centres-layout/pages-early-learning-centres-layout.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard, HasRoleGuard],
    loadChildren: () => import('./pages-home/pages-home.module').then(m => m.PagesHomeModule)
  },
  {
    path: 'setup-role',
    canActivate: [IsAuthenticatedGuard, HasRoleGuard],
    loadChildren: () => import('./pages-setup-role/pages-setup-role.module').then(m => m.PagesSetupRoleModule)
  },
  {
    path: 'how-it-works', 
    loadChildren: () => import('./pages-how-it-works/pages-how-it-works.module').then(m => m.PagesHowItWorksModule)
  },
  {
    path: 'about', 
    loadChildren: () => import('./pages-about/pages-about.module').then(m => m.PagesAboutModule)
  },
  {
    path: 'whats-new', 
    loadChildren: () => import('./pages-whats-new/pages-whats-new.module').then(m => m.PagesWhatsNewModule)
  },
  {
    path: 'pricing', 
    loadChildren: () => import('./pages-pricing/pages-pricing.module').then(m => m.PagesPricingModule)
  },
  {
    path: 'contact', 
    loadChildren: () => import('./pages-contact/pages-contact.module').then(m => m.PagesContactModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./pages-privacy-policy/pages-privacy-policy.module').then(m => m.PagesPrivacyPolicyModule)
  },
  // {
  //   path: 'terms-of-use',
  //   loadChildren: () => import('./pages-terms-of-use/pages-terms-of-use.module').then(m => m.PagesTermsOfUseModule)
  // },
  {
    path: 'thank-you',
    loadChildren: () => import('./pages-thank-you/pages-thank-you.module').then(m => m.PagesThankYouModule)
  },
  {
    path: 'login', 
    canActivate: [IsAuthenticatedGuard],
    loadChildren: () => import('./pages-login/pages-login.module').then(m => m.PagesLoginModule)
  },
  {
    path: 'register', 
    canActivate: [IsAuthenticatedGuard],
    loadChildren: () => import('./pages-register/pages-register.module').then(m => m.PagesRegisterModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages-forgot-password/pages-forgot-password.module').then(m => m.PagesForgotPasswordModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./pages-change-password/pages-change-password.module').then(m => m.PagesChangePasswordModule)
  },
  {
    path: 'email/verify',
    loadChildren: () => import('./pages-email-verify/pages-email-verify.module').then(m => m.PagesEmailVerifyModule)
  },
  {
    path: 'email/verified',
    loadChildren: () => import('./pages-email-verified/pages-email-verified.module').then(m => m.PagesEmailVerifiedModule)
  },

  // system-admin
  {
    path: 'system-admin',
    component: PagesSystemAdminLayoutComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.SystemAdmin] },
    loadChildren: () => import('./pages-system-admin/pages-system-admin.module').then(m => m.PagesSystemAdminModule)
  },

  // Early Learning Centres
  {
    path: 'early-learning-centres',
    component: PagesEarlyLearningCentresLayoutComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.EarlyLearningCentres] },
    loadChildren: () => import('./pages-early-learning-centres/pages-early-learning-centres.module').then(m => m.PagesEarlyLearningCentresModule)
  },

  // Early Childcare Educator
  {
    path: 'early-childhood-educator',
    component: PagesEarlyChildhoodEducatorLayoutComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.EarlyChildhoodEducator] },
    loadChildren: () => import('./pages-early-childhood-educator/pages-early-childhood-educator.module').then(m => m.PagesEarlyChildhoodEducatorModule)
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PagesRoutingModule { }
