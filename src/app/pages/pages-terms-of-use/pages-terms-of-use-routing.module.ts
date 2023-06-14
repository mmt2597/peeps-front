import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesTermsOfUseIndexComponent } from './pages-terms-of-use-index/pages-terms-of-use-index.component';


const routes: Routes = [
  {
    path: '',
    component: PagesTermsOfUseIndexComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesTermsOfUseRoutingModule { }
