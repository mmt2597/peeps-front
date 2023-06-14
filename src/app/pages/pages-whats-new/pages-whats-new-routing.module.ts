import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesWhatsNewIndexComponent } from './pages-whats-new-index/pages-whats-new-index.component';
import { PagesWhatsNewReadMoreComponent } from './pages-whats-new-read-more/pages-whats-new-read-more.component';

const routes: Routes = [
  {
    path: '',
    component: PagesWhatsNewIndexComponent
  },
  {
    path: ':uuid',
    component: PagesWhatsNewReadMoreComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesWhatsNewRoutingModule { }
