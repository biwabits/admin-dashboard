import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { SmartTableService } from '../../@core/data/smart-table.service';

@NgModule({
  declarations: [
    ...routedComponents
  ],
  imports: [
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule
  ],
  providers: [
    SmartTableService
  ]
})
export class TablesModule { }
