import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesPrivacyPolicyIndexComponent } from './pages-privacy-policy-index/pages-privacy-policy-index.component';

const routes: Routes = [
  {
    path: '',
    component: PagesPrivacyPolicyIndexComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesPrivacyPolicyRoutingModule { }
