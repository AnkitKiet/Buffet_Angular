import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsGenComponent } from './reports-gen/reports-gen.component';
import {ReportsRoutingModule} from './reports-routing.module';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    ReportsRoutingModule,
    ChartsModule
  ],
  declarations: [ReportsGenComponent],
  exports:[ReportsGenComponent]
})
export class ReportsModule { }
