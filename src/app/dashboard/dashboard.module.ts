import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard-info/dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {MatTabsModule,MatCardModule} from '@angular/material';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    DashboardRoutingModule,
    MatTabsModule,
    MatCardModule
  ],
  exports: [DashboardComponent]
})

export class DashboardModule {}
