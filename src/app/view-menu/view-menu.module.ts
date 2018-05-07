import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuEditComponent } from './menu-edit/menu-edit.component';
import {ViewMenuRoutingModule} from './view-menu-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material';
@NgModule({
  declarations: [MenuEditComponent],
  imports: [
    CommonModule,
    ViewMenuRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports:[MenuEditComponent]
})
export class ViewMenuModule { }
