import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FacilityTestComponent} from './facility/facility-test/facility-test.component';
import { FacilityComponent } from './facility/facility.component';


const projectsRoutes: Routes = [
    {
      path: 'facility',
      component: FacilityComponent

    },
    {
      path: 'test',
      component: FacilityTestComponent
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
export class FacilityRoutingModule {}
