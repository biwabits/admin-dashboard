import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsRadarComponent } from './echarts-radar.component';

describe('EchartsRadarComponent', () => {
  let component: EchartsRadarComponent;
  let fixture: ComponentFixture<EchartsRadarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartsRadarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartsRadarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
