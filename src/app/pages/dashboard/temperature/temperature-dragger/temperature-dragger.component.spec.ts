import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureDraggerComponent } from './temperature-dragger.component';

describe('TemperatureDraggerComponent', () => {
  let component: TemperatureDraggerComponent;
  let fixture: ComponentFixture<TemperatureDraggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperatureDraggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureDraggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
