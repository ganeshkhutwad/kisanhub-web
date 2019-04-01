import { Component, OnInit } from '@angular/core';
import { WebServiceService } from '../../shared/services/web-service.service';
import { environment } from '../../../environments/environment.prod';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-visualize-weather-report',
  templateUrl: './visualize-weather-report.component.html',
  styleUrls: ['./visualize-weather-report.component.css']
})
export class VisualizeWeatherReportComponent implements OnInit {

  chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Weather',
        data: [],
        fill: false,
        borderColor: '#00AEFF',
        borderWidth: 1,
      }
    ],
  };

  constructor(private webServiceService: WebServiceService) { }

  ngOnInit() {
  }

  fetchWeatherDetails(data: any) {
    console.log('form data ==>', data);
    const url = `${environment.baseUrl}/scotland/weather/?metric=${data.metric}&start_month=${data.startMonth}&start_year=${data.startYear}&end_month=${data.endMonth}&end_year=${data.endYear}`;
    this.webServiceService.getService(url).subscribe((res: any) => {

      let newArr = new Array(12).fill(0);
      res.forEach((element: any) => newArr[element.month - 1] = element.value);
      this.chartData = {
        ...this.chartData,
        datasets: [
          {
            ...this.chartData.datasets[0],
            data: [...newArr]
          }
        ]
      };
    })
  }
}
