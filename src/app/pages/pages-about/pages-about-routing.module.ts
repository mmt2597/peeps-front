import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesAboutIndexComponent } from './pages-about-index/pages-about-index.component';

const routes: Routes = [
  {
    path: '',
    component: PagesAboutIndexComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesAboutRoutingModule { }
