import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsAreaStackComponent } from './echarts-area-stack.component';

describe('EchartsAreaStackComponent', () => {
  let component: EchartsAreaStackComponent;
  let fixture: ComponentFixture<EchartsAreaStackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartsAreaStackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartsAreaStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
