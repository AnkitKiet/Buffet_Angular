import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardModule} from './dashboard/dashboard.module';
import {FacilityInfoModule} from './facility-info/facility-info.module';
import {LoginComponent} from './login/login.component';
const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardModule,
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'facility',
    component: FacilityInfoModule,
    loadChildren: './facility-info/facility-info.module#FacilityInfoModule'
  },
  {
  path: 'login',
  component:LoginComponent
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
