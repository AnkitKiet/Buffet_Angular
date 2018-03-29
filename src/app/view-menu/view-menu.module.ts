import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuEditComponent } from './menu-edit/menu-edit.component';
import {ViewMenuRoutingModule} from './view-menu-routing.module';

@NgModule({
  declarations: [MenuEditComponent],
  imports: [
    CommonModule,
    ViewMenuRoutingModule
  ],
  exports:[MenuEditComponent]
})
export class ViewMenuModule { }
