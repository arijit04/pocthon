import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DifComponent } from './dif/dif.component';
import { DifViewComponent } from './dif-view/dif-view.component';

const routes: Routes = [
  {
    path: '',
    component: DifComponent
  },
  {
    path: 'view',
    component: DifViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DifRoutingModule { }
