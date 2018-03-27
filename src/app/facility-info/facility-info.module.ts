import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacilityComponent } from './facility/facility.component';
import { FacilityRoutingModule } from './facility-routing.module';
import {FacilityTestComponent} from './facility/facility-test/facility-test.component';
import {MatTableModule,MatPaginatorModule} from '@angular/material';


@NgModule({
  declarations: [FacilityComponent,
  FacilityTestComponent],
  imports: [
    FacilityRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports:[FacilityComponent]

})
export class FacilityInfoModule { }
