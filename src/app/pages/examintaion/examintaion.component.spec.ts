import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamintaionComponent } from './examintaion.component';

describe('ExamintaionComponent', () => {
  let component: ExamintaionComponent;
  let fixture: ComponentFixture<ExamintaionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamintaionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamintaionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
