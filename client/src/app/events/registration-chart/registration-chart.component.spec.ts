import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationChartComponent } from './registration-chart.component';

describe('RegistrationChartComponent', () => {
  let component: RegistrationChartComponent;
  let fixture: ComponentFixture<RegistrationChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
