import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReportsGenComponent } from './reports-gen/reports-gen.component';


const projectsRoutes: Routes = [
    {
      path: 'reports',
      component: ReportsGenComponent

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
export class ReportsRoutingModule {}
