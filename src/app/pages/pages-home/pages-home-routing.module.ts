import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesHomeIndexComponent } from './pages-home-index/pages-home-index.component';

const routes: Routes = [
  {
    path: '',
    component: PagesHomeIndexComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesHomeRoutingModule { }
