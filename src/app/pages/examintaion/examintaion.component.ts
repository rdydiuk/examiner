import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examintaion',
  templateUrl: './examintaion.component.html',
  styleUrls: ['./examintaion.component.scss']
})
export class ExamintaionComponent implements OnInit {

  examStates = ExamStates
  currentState = ExamStates.progress
  constructor() { }

  ngOnInit(): void {
  }

}

enum ExamStates {
  progress,
  result
}
