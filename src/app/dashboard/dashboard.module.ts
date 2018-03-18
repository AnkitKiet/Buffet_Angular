import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard-info/dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    DashboardRoutingModule
  ],
  exports: [DashboardComponent]
})

export class DashboardModule {}
