import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesPricingIndexComponent } from './pages-pricing-index/pages-pricing-index.component';

const routes: Routes = [
  {
    path: '',
    component: PagesPricingIndexComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesPricingRoutingModule { }
