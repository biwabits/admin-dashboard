import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsBarAnimationComponent } from './echarts-bar-animation.component';

describe('EchartsBarAnimationComponent', () => {
  let component: EchartsBarAnimationComponent;
  let fixture: ComponentFixture<EchartsBarAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartsBarAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartsBarAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
