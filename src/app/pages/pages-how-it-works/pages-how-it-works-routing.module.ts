import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesHowItWorksIndexComponent } from './pages-how-it-works-index/pages-how-it-works-index.component';

const routes: Routes = [
  {
    path: '',
    component: PagesHowItWorksIndexComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesHowItWorksRoutingModule { }
