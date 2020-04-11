import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {

  examPages = ExamPages;
  currentExamPage = this.examPages.ExamDetails

  constructor() { }

  ngOnInit(): void {
  }

}

export enum ExamPages {
  ExamDetails,
  CamMicCheck,
  StartExam
}

