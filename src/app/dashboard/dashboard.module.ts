import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard-info/dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {MatTabsModule,MatCardModule} from '@angular/material';
import {FacilityInfoModule} from '../facility-info/facility-info.module';
import {ViewMenuModule} from '../view-menu/view-menu.module';
import {ReportsModule} from '../reports/reports.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    DashboardRoutingModule,
    MatTabsModule,
    MatCardModule,
    FacilityInfoModule,
    ReportsModule,
    ViewMenuModule,
    CommonModule
  ],
  exports: [DashboardComponent]
})

export class DashboardModule {}
