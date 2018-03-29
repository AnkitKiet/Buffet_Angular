import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuEditComponent} from './menu-edit/menu-edit.component';


const projectsRoutes: Routes = [
    {
      path: 'editmenu',
      component: MenuEditComponent

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
export class ViewMenuRoutingModule {}
