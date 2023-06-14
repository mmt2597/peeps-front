import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesEmailVerifyIndexComponent } from './pages-email-verify-index/pages-email-verify-index.component';

const routes: Routes = [
  {
    path: '',
    component: PagesEmailVerifyIndexComponent
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesEmailVerifyRoutingModule { }
