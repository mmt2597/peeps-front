import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { PagesRegisterIndexComponent } from './pages-register-index/pages-register-index.component';

const routes: Routes = [
  {
    path: '',
    component: PagesRegisterIndexComponent
  }
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRegisterRoutingModule { }
