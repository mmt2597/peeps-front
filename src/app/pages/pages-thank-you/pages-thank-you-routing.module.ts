import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesThankYouIndexComponent } from './pages-thank-you-index/pages-thank-you-index.component';

const routes: Routes = [
  {
    path: '',
    component: PagesThankYouIndexComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesThankYouRoutingModule { }
