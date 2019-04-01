import { NgModule } from '@angular/core';
import { VisualizeWeatherReportComponent } from './visualize-weather-report/visualize-weather-report.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    VisualizeWeatherReportComponent
  ],
  imports: [
    SharedModule
  ],
  providers: [],
  exports: [
    VisualizeWeatherReportComponent
  ]
})
export class DashboardModule { }
