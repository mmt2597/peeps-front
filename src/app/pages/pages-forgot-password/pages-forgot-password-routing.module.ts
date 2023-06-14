import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesForgotPasswordIndexComponent } from './pages-forgot-password-index/pages-forgot-password-index.component';



const routes: Routes = [
  {
    path: '',
    component: PagesForgotPasswordIndexComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesForgotPasswordRoutingModule { }
