import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesSetupRoleIndexComponent } from './pages-setup-role-index/pages-setup-role-index.component';

const routes: Routes = [
  {
    path: '',
    component: PagesSetupRoleIndexComponent
  }
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesSetupRoleRoutingModule { }
