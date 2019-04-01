import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizeWeatherReportComponent } from './visualize-weather-report.component';

describe('VisualizeWeatherReportComponent', () => {
  let component: VisualizeWeatherReportComponent;
  let fixture: ComponentFixture<VisualizeWeatherReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizeWeatherReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizeWeatherReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
