import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardModule} from './dashboard/dashboard.module';
import {FacilityInfoModule} from './facility-info/facility-info.module';
import {ViewMenuModule} from './view-menu/view-menu.module';
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
  },
  {
    path: 'editmenu',
    component: ViewMenuModule,
    loadChildren:'./view-menu/view-menu.module#ViewMenuModule'
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
