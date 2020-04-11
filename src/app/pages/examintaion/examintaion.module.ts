import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamintaionRoutingModule } from './examintaion-routing.module';
import { ExamintaionComponent } from './examintaion.component';


@NgModule({
  declarations: [ExamintaionComponent],
  imports: [
    CommonModule,
    ExamintaionRoutingModule
  ]
})
export class ExamintaionModule { }
