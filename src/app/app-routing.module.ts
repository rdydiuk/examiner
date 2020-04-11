import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'student-dashboard', loadChildren: () => import(`./pages/student-dashboard/student-dashboard.module`).then(m => m.StudentDashboardModule) },
  { path: 'examination', loadChildren: () => import(`./pages/examintaion/examintaion.module`).then(m => m.ExamintaionModule) },
  { path: '**', loadChildren: () => import(`./pages/login/login.module`).then(m => m.LoginModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }