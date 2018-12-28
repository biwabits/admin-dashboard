import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';
import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { StatusCardComponent } from './status-card/status-card.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { TemperatureDraggerComponent } from './temperature/temperature-dragger/temperature-dragger.component';
import { ElectricityComponent } from './electricity/electricity.component';
import { ElectricityChartComponent } from './electricity/electricity-chart/electricity-chart.component';
import { SolarComponent } from './solar/solar.component';
import { TrafficComponent } from './traffic/traffic.component';
import { TrafficChartComponent } from './traffic/traffic-chart.component';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [
    DashboardComponent,
    StatusCardComponent,
    TemperatureComponent,
    TemperatureDraggerComponent,
    ElectricityComponent,
    ElectricityChartComponent,
    SolarComponent,
    TrafficComponent,
    TrafficChartComponent,
    WeatherComponent
  ],
  imports: [
    ThemeModule,
    NgxEchartsModule
  ]
})
export class DashboardModule { }
