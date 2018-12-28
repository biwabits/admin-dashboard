import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';

import { ChartsRoutingModule, routedComponents } from './charts-routing.module';
import { EchartsComponent } from './echarts/echarts.component';
import { EchartsRadarComponent } from './echarts/echarts-radar/echarts-radar.component';
import { EchartsPieComponent } from './echarts/echarts-pie/echarts-pie.component';
import { EchartsMultipleXaxisComponent } from './echarts/echarts-multiple-xaxis/echarts-multiple-xaxis.component';
import { EchartsLineComponent } from './echarts/echarts-line/echarts-line.component';
import { EchartsBarComponent } from './echarts/echarts-bar/echarts-bar.component';
import { EchartsBarAnimationComponent } from './echarts/echarts-bar-animation/echarts-bar-animation.component';
import { EchartsAreaStackComponent } from './echarts/echarts-area-stack/echarts-area-stack.component';
import { ChartsComponent } from './charts.component';
import { ThemeModule } from '../../@theme/theme.module';

const components = [
  EchartsComponent, 
  EchartsRadarComponent, 
  EchartsPieComponent, 
  EchartsMultipleXaxisComponent, 
  EchartsLineComponent, 
  EchartsBarComponent, 
  EchartsBarAnimationComponent, 
  EchartsAreaStackComponent, 
  ChartsComponent
];

@NgModule({
  declarations: [
    ...components, ...routedComponents
  ],
  imports: [
    ThemeModule,
    CommonModule,
    NgxEchartsModule,
    ChartsRoutingModule
  ]
})
export class ChartsModule { }
