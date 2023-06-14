import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesChangePasswordIndexComponent } from './pages-change-password-index/pages-change-password-index.component';


const routes: Routes = [
  {
    path: '',
    component: PagesChangePasswordIndexComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesChangePasswordRoutingModule { }
