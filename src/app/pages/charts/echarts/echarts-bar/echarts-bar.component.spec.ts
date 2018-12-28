import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsBarComponent } from './echarts-bar.component';

describe('EchartsBarComponent', () => {
  let component: EchartsBarComponent;
  let fixture: ComponentFixture<EchartsBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartsBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
