import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard-info/dashboard.component';


const projectsRoutes: Routes = [
    {
      path: 'dashboard',
      component: DashboardComponent

    }


];

@NgModule({
  imports: [
    RouterModule.forChild(projectsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule {}
