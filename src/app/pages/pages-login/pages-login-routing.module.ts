import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesLoginIndexComponent } from './pages-login-index/pages-login-index.component';

const routes: Routes = [
  {
    path: '',
    component: PagesLoginIndexComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesLoginRoutingModule { }
