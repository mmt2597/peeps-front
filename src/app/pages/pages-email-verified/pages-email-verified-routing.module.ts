import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesEmailVerifiedIndexComponent } from './pages-email-verified-index/pages-email-verified-index.component';

const routes: Routes = [
  {
    path: '',
    component: PagesEmailVerifiedIndexComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesEmailVerifiedRoutingModule { }
