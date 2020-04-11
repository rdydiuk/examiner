import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamintaionComponent } from './examintaion.component';

const routes: Routes = [
  { path: '', component: ExamintaionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamintaionRoutingModule { }
