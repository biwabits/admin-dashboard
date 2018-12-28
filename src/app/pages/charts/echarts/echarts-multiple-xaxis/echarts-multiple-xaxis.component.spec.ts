import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsMultipleXaxisComponent } from './echarts-multiple-xaxis.component';

describe('EchartsMultipleXaxisComponent', () => {
  let component: EchartsMultipleXaxisComponent;
  let fixture: ComponentFixture<EchartsMultipleXaxisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartsMultipleXaxisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartsMultipleXaxisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
