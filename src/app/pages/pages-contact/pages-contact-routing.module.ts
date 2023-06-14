import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesContactIndexComponent } from './pages-contact-index/pages-contact-index.component';

const routes: Routes = [
  {
    path: '',
    component: PagesContactIndexComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesContactRoutingModule { }
